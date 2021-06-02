import React, { FC, ChangeEvent, useState } from "react";
import "./App.scss";
import "antd/dist/antd.css";

import { Button, Row, Col, Input } from 'antd';

import TodoListItem from "./components/TodoListItem";

import Header from './components/header'

interface ITask {
  taskName: string;
}

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {

    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="bg-white rounded shadow p-6 m-4 ">
          <Row>
            <Col span={16}>
              <Input
                type="text"
                placeholder="Please Enter Your Task Here"
                name="task"
                value={task}
                onChange={handleChange}
              />
            </Col>
            <Col span={8}>
              <Button type="primary" block onClick={addTask} disabled={!task}>
                Add Task
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoListItem key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;