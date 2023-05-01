import { Box, Center, Container, Text, Divider, Grid, Title, createStyles, rem, PasswordInput, Button, TextInput } from '@mantine/core'
import React, { useEffect, } from 'react'
import { useForm, matchesField, } from '@mantine/form';

import FooterSection from './FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

    const form = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: "",
            confirm_password: "",
        },

        validate: {

            first_name: (value) => {
                const regex = /^[a-zA-Z\s]+$/;


                if (!value) {
                    return 'First name is required';
                }
                else if (value.length < 2 || value.length > 20) {
                    return 'Field length must be between 2 and 20 characters';
                }
                else if (value[0] === ' ') {
                    return 'First name cannot start with a space';
                } else if (!regex.test(value)) {
                    return 'First name can only contain letters and spaces';
                } else {
                    return null;
                }
            },

            last_name: (value) => {
                const regex = /^[a-zA-Z\s]+$/;
                if (!value) {
                    return 'Last name is required';
                } else if (value.length < 2 || value.length > 20) {
                    return 'Field length must be between 2 and 20 characters';
                } else if (value[0] === ' ') {
                    return 'Last name cannot start with a space';
                } else if (!regex.test(value)) {
                    return 'Last name can only contain letters and spaces';
                } else {
                    return null;
                }
            },

            email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),

            // password: isNotEmpty('Password can not be empty'),
            password: (value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ? null : 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),

            confirm_password: matchesField('password', 'Passwords are not the same'),


        },
    });
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 200,
            easing: 'ease-in-out',
            delay: 400,
            once: true
        });
    }, []);
    const register = async (value) => {
        await fetch('http://localhost:8000/register', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        }).then(function (a) {
            return a.json()
        })
            .then(function (json) {
                console.log(json)
            })
    
    }
    return (
        <>
            <Box pt={50} id='contact' style={{
                // height: "100vh",
                background: "#191919"
            }}>
                <Box mt={50}>
                    <Container size="85%" data-aos="fade-up">

                        <Center>

                            <Title order={1}>Contact <span style={{ color: "#37B24D" }}>Me</span></Title>
                        </Center>
                        <Divider mt="lg"></Divider>
                        <Grid>
                            <Grid.Col data-Aos="fade-up">

                                <Center>


                                    <Box maw={400} mt="lg" mx="auto" component="form" p="lg" px={50} sx={(theme) => ({
                                        background: theme.colors.basic[2],
                                        borderRadius: "10px"
                                    })} onSubmit={form.onSubmit((value) =>{ register(value) })}
                                    >
                                        <Grid>

                                            <Grid.Col md={12} lg={12} sm={12}>
                                                <TextInput type='text' label={<Text >First Name*</Text>} placeholder="Enter First Name"
                                                    size="md"

                                                    {...form.getInputProps('first_name')}

                                                />
                                            </Grid.Col>
                                            <Grid.Col md={12} lg={12} sm={12}>

                                                <TextInput type='text' label={<Text >Last Name*</Text>} placeholder="Enter Last Name"
                                                    size="md"
                                                    {...form.getInputProps('last_name')}



                                                />
                                            </Grid.Col>


                                            <Grid.Col>
                                                <TextInput type='text' label={<Text >Email*</Text>} placeholder="Enter your email"
                                                    {...form.getInputProps('email')}

                                                />
                                            </Grid.Col>


                                            <Grid.Col md={6} lg={6} sm={12}>
                                                <PasswordInput label={<Text >Password*</Text>} placeholder="Password"
                                                    {...form.getInputProps('password')}
                                                />
                                            </Grid.Col>
                                            <Grid.Col md={6} lg={6} sm={12}>
                                                <PasswordInput label={<Text >Confirm Password*</Text>} placeholder="Confirm Password"
                                                    {...form.getInputProps('confirm_password')}

                                                />
                                            </Grid.Col>
                                        </Grid>
                                        <Center>
                                            <Button type='submit' color="dark" mt="md">Submit</Button>
                                        </Center>
                                    </Box>
                                </Center>
                            </Grid.Col>

                        </Grid>

                    </Container>
                </Box>
                <Box mt="lg">
                    <FooterSection />
                </Box>
            </Box>
        </>
    )
}

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },
    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));
