function solve(input) {
    let elCount = Number(input.shift());
    let boardInfo = {};
   
    for (let i = 0; i < elCount; i++) {
      let [assignee, taskId, title, status, estimatedPoints] = input[i].split(':');
      estimatedPoints = Number(estimatedPoints);
   
      if (boardInfo[assignee] === undefined) {
        boardInfo[assignee] = [];
      }
   
      let task = { taskId, title, status, estimatedPoints };
   
      boardInfo[assignee].push(task);
    }
   
    input.splice(0, elCount);
   
    input.forEach((line) => {
      let [command, ...taskData] = line.split(':');
   
      if (command === 'Add New') {
        let [assignee, taskId, title, status, estimatedPoints] = taskData;
        estimatedPoints = Number(estimatedPoints);
   
        if (boardInfo[assignee] === undefined) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          let task = { taskId, title, status, estimatedPoints };
   
          boardInfo[assignee].push(task);
        }
      } else if (command === 'Change Status') {
        let [assignee, taskId, newStatus] = taskData;
   
        if (boardInfo[assignee] === undefined) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          let taskIds = [];
          boardInfo[assignee].forEach((task) => taskIds.push(task.taskId));
          if (!taskIds.includes(taskId)) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
          } else {
            boardInfo[assignee].forEach((task) => {
              if (task.taskId === taskId) {
                task.status = newStatus;
              }
            });
          }
        }
      } else if (command === 'Remove Task') {
        let [assignee, index] = taskData;
        index = Number(index);
   
        if (boardInfo[assignee] === undefined) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          if (boardInfo[assignee][index] === undefined) {
            console.log('Index is out of range!');
          } else {
            boardInfo[assignee].splice(index, 1);
          }
        }
      }
    });
   
    let total = {
      toDoTasksTotalPoints: 0,
      inProgressTasksTotalPoints: 0,
      codeReviewTasksTotalPoints: 0,
      doneTasksTotalPoints: 0
    };
   
    Object.values(boardInfo).forEach((tasks) => {
      tasks.forEach((task) => {
        switch (task.status) {
          case 'ToDo':
            total.toDoTasksTotalPoints += task.estimatedPoints;
            break;
          case 'In Progress':
            total.inProgressTasksTotalPoints += task.estimatedPoints;
            break;
          case 'Code Review':
            total.codeReviewTasksTotalPoints += task.estimatedPoints;
            break;
          case 'Done':
            total.doneTasksTotalPoints += task.estimatedPoints;
            break;
        }
      });
    });
   
    console.log(`ToDo: ${total.toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${total.inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${total.codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${total.doneTasksTotalPoints}pts`);
   
    if (
      total.doneTasksTotalPoints >=
      total.toDoTasksTotalPoints + total.inProgressTasksTotalPoints + total.codeReviewTasksTotalPoints
    ) {
      console.log(`Sprint was successful!`);
    } else {
      console.log(`Sprint was unsuccessful...`);
    }
  }