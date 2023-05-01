import { Box, Center, Container, Divider, Grid, Title, Text,} from '@mantine/core'
import React, { useEffect } from 'react'
import { FaGraduationCap } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {

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
            <Box pt={50} id='experience' style={{
                // height: "100vh",
                background: "#191919"
            }}>
                <Box mt={50}>
                    <Container size="85%" data-aos="fade-up" >

                        <Center>

                            <Title order={1}>My <span style={{ color: "#37B24D" }} data-aos="fade-up" >Experience</span></Title>
                        </Center>
                        <Divider mt="lg"></Divider>
                        <Grid mt='lg'>
                            <Grid.Col md={6}>
                                <Box p="sm"  data-aos="fade-up" >
                                    <Box >
                                        <FaGraduationCap size={50} style={{ color: "#37B24D" }} />
                                    </Box>
                                    <Text>2020</Text>
                                    <Title order={2}> Started with HTML,CSS</Title>
                                    <Text>During the time of lockdown, I started off with Java from (Ducat India Noida) and completed it during that time. </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Box p="sm" data-aos="fade-up" >
                                    <Box>
                                        <FaGraduationCap size={50} style={{ color: "#37B24D" }} />
                                    </Box>
                                    <Text>2021</Text>
                                    <Title order={2}> Web, App Development </Title>
                                    <Text>As soon as I completed the React Native course, then I went on to Web Development from Ducat India and completed it.</Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Box p="sm" data-aos="fade-up" >
                                    <Box>
                                        <FaGraduationCap size={50} style={{ color: "#37B24D" }} />
                                    </Box>
                                    <Text>2022</Text>
                                    <Title order={2}> Started with Projects</Title>
                                    <Text>Projects are the main source of developing the skills. So i work on so many projects in triline infotech pvt.  </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Box p="sm" data-aos="fade-up" >
                                    <Box>
                                        <FaGraduationCap size={50} style={{ color: "#37B24D" }} />
                                    </Box>
                                    <Text>2023</Text>
                                    <Title order={2}>Current Status In Triline </Title>
                                    <Text>During the time of lockdown, I started off with Java from (Ducat India Noida) and completed it during that time. </Text>
                                </Box>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>
            </Box>

        </>
    )
}
