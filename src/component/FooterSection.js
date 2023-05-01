import { Avatar, Box, Center, Container, Grid, List, Title } from '@mantine/core'
import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitterFilled, IconLocation, IconMail } from '@tabler/icons-react'
import React, { useEffect } from 'react'
// import Dhanush from "./assets/Dhanush.jpg"
import zoya from "./assets/zoya.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FooterSection() {
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
            <Box p="lg" id='contact' style={{
                // height: "50vh",
                background: "#37B24D",
                color: "black"
            }}>
                <Container size="85%"  >


                    <Grid>
                        <Grid.Col md={4} data-aos="fade-down">
                            <Title order={2}  >GET IN TOUCH </Title>

                            <Box mt="lg">


                                <List

                                    size="sm"
                                    center
                                    icon={

                                        <IconMail size="25px" color='white' />

                                    }
                                >
                                    <List.Item>hiitechz07@gmail.com</List.Item>

                                </List>
                                <List

                                    size="sm"
                                    center
                                    icon={

                                        <IconLocation size="25px" color='white' />

                                    }
                                >
                                    <List.Item>Noida sector 52 </List.Item>

                                </List>


                            </Box>




                        </Grid.Col>
                        <Grid.Col md={4} data-aos="fade-down">


                            <Center>
                                <Avatar src={zoya} alt="it's me" radius="50%" size="100px" />
                            </Center>

                        </Grid.Col>
                        <Grid.Col md={4} data-aos="fade-down">

                            <Title order={2} align='right' sx={(theme) => ({
                                "@media(max-width :768px)": {
                                    textAlign: "left"
                                }
                            })}>FOLLOW ME ON</Title>
                            <Box mt="lg" align='right'
                                sx={(theme) => ({
                                  
                                    "@media(max-width :768px)": {
                                        textAlign: "left",
                                      
                                    }
                                })}
                            >
                                <IconBrandTwitterFilled size={25} style={{
                                    paddingInline: "15px",
                                    color: "#fff"
                                }} />
                                <IconBrandInstagram size={25} style={{
                                    paddingInline: "15px",
                                    color: "#fff"

                                }} />
                                <IconBrandGithubFilled size={25} style={{
                                    paddingInline: "15px",
                                    color: "#fff"

                                }} />
                                <IconBrandLinkedin size={25} style={{
                                    paddingInline: "15px",
                                    color: "#fff"

                                }} />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container >
            </Box>
        </>
    )
}
