import React, { useEffect } from 'react'
import { Box, Center, Container, Title,  Divider, Grid,  createStyles, Flex, List, } from '@mantine/core'
import { IconStar } from '@tabler/icons-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = createStyles((theme) => ({
    skillSection: {
        background: "black",
        color: "#fff",
        borderRadius: "20px",
        transition: "all 0.4s ease-in-out",
        border: "1px solid transparent ",
        "&:hover": {
            background: "transparent",
            border: "1px solid #37B24D"
        }
    }
}))

export default function About() {

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
            <Box pt={50} id='about' style={{
                // height: "100vh",
                background: "#191919"
            }}>
                <Box mt={50}>
                    <Container size="85%" data-aos="fade-up" >

                        <Center>

                            <Title data-aos="fade-up" order={1}>About <span style={{ color: "#37B24D" }}>Skills</span></Title>
                        </Center>
                        <Divider mt="lg"></Divider>
                        <Grid mt={50}>
                            <Grid.Col md={6} >
                                <Box className={classes.skillSection} p="lg">
                                    <Center>

                                        <Title order={2} data-aos="fade-up"> Frontend Development</Title>
                                    </Center>

                                    <Flex mt="lg" data-aos="fade-up">
                                        <Box sx={(theme) => ({ width: "50%" })}>
                                            <List
                                                spacing="lg"
                                                size="sm"
                                                center
                                                icon={
                                                    <IconStar size="1.5rem" color='#37B24D' />
                                                }>
                                                <List.Item style={{ color: "#fff" }}>HTML</List.Item>
                                                <List.Item style={{ color: "#fff" }}>CSS</List.Item>
                                                <List.Item style={{ color: "#fff" }}>Java Script</List.Item>
                                                <List.Item style={{ color: "#fff" }}>React</List.Item>
                                            </List>
                                        </Box>
                                        <List
                                            spacing="lg"
                                            size="sm"
                                            center
                                            icon={
                                                <IconStar size="1.5rem" color='#37B24D' />}>
                                            <List.Item style={{ color: "#fff" }}>Bootstrap</List.Item>
                                            <List.Item style={{ color: "#fff" }}>React Native</List.Item>
                                            <List.Item style={{ color: "#fff" }}>Angular</List.Item>
                                            <List.Item style={{ color: "#fff" }}>View Js</List.Item>

                                        </List>
                                    </Flex>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Box p={20} className={classes.skillSection} >
                                    <Center>
                                        <Title order={2} data-aos="fade-up"> Backend Development</Title>
                                    </Center>
                                    <Flex mt="lg" data-aos="fade-up">
                                        <Box sx={(theme) => ({
                                            width: "50%"
                                        })}>
                                            <List
                                                spacing="lg"
                                                size="sm"
                                                center
                                                icon={
                                                    <IconStar size="1.5rem" color='#37B24D' />
                                                }>
                                                <List.Item style={{ color: "#fff" }}>Node Js</List.Item>
                                                <List.Item style={{ color: "#fff" }}>Mongo DB</List.Item>
                                                <List.Item style={{ color: "#fff" }}>Express Js</List.Item>
                                                <List.Item style={{ color: "#fff" }}>PHP</List.Item>

                                            </List>
                                        </Box>
                                        <List
                                            spacing="lg"
                                            size="sm"
                                            center
                                            icon={
                                                <IconStar size="1.5rem" color='#37B24D' />

                                            }>
                                            <List.Item style={{ color: "#fff" }}>Laravel</List.Item>
                                            <List.Item style={{ color: "#fff" }}>Java</List.Item>
                                            <List.Item style={{ color: "#fff" }}>Dot Net</List.Item>
                                            <List.Item style={{ color: "#fff" }}>Python</List.Item>

                                        </List>


                                    </Flex>
                                </Box>
                            </Grid.Col>
                        </Grid>



                    </Container>

                </Box>
            </Box >
        </>
    )
}

