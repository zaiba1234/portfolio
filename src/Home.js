import Dhanush from "./component/assets/Dhanush.jpg"
import zoya from "./component/assets/zoya.jpeg"
import {
    AppShell,
    Navbar,
    Header,

    Text,
    MediaQuery,
    Burger,

    List,
    Center,
    Avatar,
    createStyles,
    Box,

} from '@mantine/core';
import MainPage from './component/MainPage';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contact from './component/Contact';
import "nprogress/nprogress.css";
import ScrollButton from './component/Pages/ScrollButton';
import { useEffect, useState } from 'react';
export default function Home() {
    const { classes } = useStyles()
    const [opened, setOpened] = useState(false);
    const [completion, setCompletion] = useState(0)
    const handleHome = () => {
        window.location.href = '#';
    }; const handleAbout = () => {
        window.location.href = '#about';
    }; const handleExperience = () => {
        window.location.href = '#experience';
    }; const handleProjects = () => {
        window.location.href = '#projects';
    }; const handleContact = () => {
        window.location.href = '#contact';
    };

    useEffect(() => {
        const updateScrollCompleation = () => {
            const currentProgress = window.scrollY
            // console.log(scrollProgress)
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight.toFixed(2)) * 100)
                )
            }
        }
        window.addEventListener("scroll", updateScrollCompleation)
    }, [])
    // console.log(completion)
    return (
        <AppShell
            styles={{
                main: {
                    background: "black",
                    color: "#fff",
                    paddingTop: "0px",
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar data-aos="slide-right" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} style={{}} className={classes.NavHeader}>
                    <Navbar.Section >
                        <Center>
                            <Box p="xs" sx={(theme) => ({
                                borderRadius: "50%",
                                border: "2px solid #37B24D",
                            })}>

                                <Avatar src={zoya} alt="it's me" radius="50%" size="100px" 
                                
                                />
                            </Box>
                        </Center>
                        <Center mt="lg">
                            <Text fw="bold" sx={(theme) => ({
                                fontSize: theme.fontSizes.lxxl
                            })}> 𝓩𝓸𝔂𝓪 𝓐𝓵𝓪𝓶</Text>
                        </Center>
                        <Center mb="lg">
                            <Text sx={(theme) => ({
                                fontSize: theme.fontSizes.sm,
                                color: theme.colors.basic[2]
                            })}>A Web & App Developer</Text>
                        </Center >
                        <Center>
                            <List sx={(theme) => ({
                                listStyle: "none",
                                fontSize: theme.fontSizes.lg,
                                transition: "all 0.4s ease-in-out",
                                textAlign: "center",


                            })}>
                                <List.Item onClick={handleHome} className={classes.navList}  >  <a style={{ textDecoration: "none", color: "#fff" }} href="#">Home</a></List.Item>
                                <List.Item onClick={handleAbout} className={classes.navList}  >  <a style={{ textDecoration: "none", color: "#fff" }} href="#about">About</a></List.Item>
                                <List.Item onClick={handleExperience} className={classes.navList}  >   <a style={{ textDecoration: "none", color: "#fff" }} href="#experience">Experience</a> </List.Item>
                                <List.Item onClick={handleProjects} className={classes.navList}  >   <a style={{ textDecoration: "none", color: "#fff" }} href="#projects">Projects</a> </List.Item>
                                <List.Item onClick={handleContact} className={classes.navList}  >   <a style={{ textDecoration: "none", color: "#fff" }} href="#contact">Contact</a> </List.Item>
                            </List>
                        </Center>
                    </Navbar.Section>

                </Navbar>
            }
            header={
                <>
                    <Header slide-right height={{ base: 50, md: 70 }} className={classes.burgerMenu} p="md">
                        <div style={{ alignItems: 'end', height: '100%', }}>

                            <MediaQuery largerThan="sm" styles={{ display: 'none', float: "right" }}>

                                <Burger

                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color="#37B24D"
                                    mr="xl"
                                />
                            </MediaQuery>
                        </div>
                    </Header>
                </>
            }

        >

            <Box style={{ transform: `translateX(${completion - 100}%)`, background: "#37B24D", height: "1o0px", position: "sticky", }}></Box>

            <MainPage />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <ScrollButton />
        </AppShell>
    );
}


const useStyles = createStyles((theme) => ({
    navList: {
        margin: "10px",
        padding: "10px",
        background: "black",
        paddingInline: "60px",
        borderRadius: "30px",
        backgroundColor: "#191919",
        border: "1px solid #37B24D",
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            backgroundColor: theme.colors.basic[2],
            border: "1px solid transparent"

        }
    },

    burgerMenu: {
        float: "right",
        display: "none",
        textAlign: "end",
        "@media(max-width : 768px)": {
            display: "block",
            background: "black",
            // zIndex:-1,
            border: "none"
        }
    },
    NavHeader: {
        border: "none", background: "black", color: "#fff",
        "@media(max-width : 768px)": {
            marginTop: "0px"
        }
    }

}))