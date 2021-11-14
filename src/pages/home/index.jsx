import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { Button, Row, Switch, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import StudyCard from '../../components/StudyCard'
import TodoCard from '../../components/TodoCard';
import CollectionCard from '../../components/CollectionCard';
import BigTime from '../../components/BigTime';
import SearchView from '../../components/SearchView';
<<<<<<< HEAD

function Home(props) {
    const [login, setLogin] = useState(false)
    const onChange = () => {
        console.log('切换模式');
=======
import setDarkTheme from '../../assets/untils/darkTheme'

function Home(props) {
    const [login, setLogin] = useState(false)
    const [themeState,setthemeState] = useState(false)
    const onChange = () => {
        setthemeState(() => !themeState)
        setDarkTheme(themeState)
>>>>>>> 6df2ad2d88e1ee0911f3c76602f6d13c8c3e2e6f
    }
    return (
        <div>
            <Row justify="space-between">
                {
                    login
                        ? <Row align="middle"><Avatar size="small" style={{ margin: "5px 5px 0px 5px" }} icon={<UserOutlined />} /> <span>小丞同学</span> </Row>
                        : <Button type="link" href="/login" >登录</Button>
                }

                {/* 模式切换 */}
                <Switch style={{ margin: "5px 5px 0px 0px" }} checkedChildren="黑夜" unCheckedChildren="白天" onChange={onChange} />
            </Row>
            <BigTime />
            <SearchView />
            <Section>
                <TodoCard />
                <CollectionCard />
                <StudyCard />
            </Section>
        </div>
    )
}

<<<<<<< HEAD
=======

>>>>>>> 6df2ad2d88e1ee0911f3c76602f6d13c8c3e2e6f
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 50px 100px 0px 100px;
`
<<<<<<< HEAD
=======

>>>>>>> 6df2ad2d88e1ee0911f3c76602f6d13c8c3e2e6f
export default Home
