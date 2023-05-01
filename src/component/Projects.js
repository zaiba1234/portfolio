import { Box, Center, Container, Divider, Grid, Title, Image, createStyles } from '@mantine/core'
import React, { useEffect } from 'react'
import portfolio1 from "./assets/portfolio1.jpg"
import portfolio2 from "./assets/portfolio2.jpg"
import portfolio3 from "./assets/portfolio3.jpg"
import portfolio4 from "./assets/portfolio4.jpg"
import portfolio5 from "./assets/portfolio5.png"
import portfolio6 from "./assets/portfolio6.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const useStyles = createStyles((theme) => ({
    portfolioGit: {
        background: "black",
        borderRadius: "15px",
        transition: "all 0.4s ease-in-out",
        border: "1px solid transparent ",
        "&:hover": {
            background: "transparent",
            border: "1px solid #37B24D"
        },
    },
    demoButton: {
        background: "#37B24D", textDecoration: "none", borderRadius: "5px",
        transition: "all 0.4s ease-in-out",
        border: "1px solid transparent ",
        "&:hover": {
            background: "transparent",
            border: "1px solid #37B24D",
            color: "#fff"
        },
    }
}))
export default function Projects() {
    const { classes } = useStyles()
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 200,
            easing: 'ease-in-out',
            delay: 400,
            once: true
        });
    }, []);
    return (
        <>
            <Box pt={50} id='projects' style={{
                // height: "100vh",
                background: "#191919"
            }}>
                <Box mt={50}>
                    <Container size="85%" data-aos="fade-up">
                        <Center>
                            <Title order={1}>My <span style={{ color: "#37B24D" }}>Projects</span></Title>
                        </Center>
                        <Divider mt="lg"></Divider>
                        <Grid mt='lg'>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up">
                                    <Image maw={340} mx="auto" radius={15} src={portfolio1} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up" >
                                    <Image maw={340} mx="auto" radius={15} src={portfolio6} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up">
                                    <Image maw={340} mx="auto" radius={15} src={portfolio3} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up">
                                    <Image maw={340} mx="auto" radius={15} src={portfolio4} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up" >
                                    <Image maw={340} mx="auto" radius={15} src={portfolio5} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} >
                                <Box p="lg" radius="md" className={classes.portfolioGit} data-aos="fade-up">
                                    <Image maw={340} mx="auto" radius={15} src={portfolio2} alt="Random image" />
                                    <Center p={15} mt={20} className={classes.demoButton}>
                                        <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Git Hub</a>
                                    </Center>
                                </Box>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>
            </Box>

        </>
    )
}
