import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Container,Grid } from '@mui/material';
function Home() {
    // const [staff, setStaff] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement');
    //             setStaff(res.data);

    //         } catch (err) {
    //             console.error("Error", err);
    //         }
    //     };
    //     fetchData();
    // },[])
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, [baseUrl]);
    return (
        <>
            <Container style={{ padding: "3rem" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {staff.map(staffs => (
                     <Grid xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }} style={{marginBottom: "3rem"}}>
                        <CardActionArea key={staffs.id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={staffs.avatar}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Name: {staffs.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Age: {staffs.age}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    Address:{staffs.address}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/detail/${staffs.id}`}>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    );

}

export default Home