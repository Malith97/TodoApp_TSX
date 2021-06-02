import React, { useState } from "react";

import "../App.scss";

import { Button, Row, Col, Checkbox } from 'antd';

interface ITask {
    taskName: string;
}


interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoListItem = ({ task, completeTask }: Props) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className="container">
                <div className="bg-white rounded shadow p-6 m-4 ">
                    <Row>
                        <Col span={2}>
                            <Checkbox onChange={toggleClass} />
                        </Col>
                        <Col span={18}>
                            <h3 className={isActive ? "complete" : ""}>{task.taskName}</h3>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" danger
                                onClick={() => {
                                    completeTask(task.taskName);
                                }}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default TodoListItem;