import {Card, Container, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header/Header";
import {useAppSelector} from "../../redux/hooks";
import {selectUserAddress} from "../../redux/appSlice";
import {useEffect, useState} from "react";
import rewards from "./rewards.json"
const Rewards = () => {
    const userAddress = useAppSelector(selectUserAddress)
    const theme = useTheme()
    const [rewardInfo, setRewardInfo] = useState({})
    useEffect(() => {
        rewards.forEach((reward) => {
            if (reward.address === userAddress && reward.reward !== "") {
                setRewardInfo(reward)
                console.log(reward)
            }
        })
    },[userAddress])
    return (
            <Stack>
                <Header />
                <Container sx={{ paddingTop: theme.spacing(4), marginLeft: '33%' }}>
                    <Typography variant="h2">
                        $DIVA Token Claim
                    </Typography>
                    <Typography variant="h6">
                        $DIVA is the new governance token for DIVA Protocol DAO.
                    </Typography>
                    {userAddress === undefined && (<Typography variant="body1">
                        Connect your wallet to determine your eligibility.
                    </Typography>)}
                    {userAddress !== undefined && rewardInfo !== {} && (<Typography variant="body1">
                    You are eligible for token claim, below are the details of your participation.
                    </Typography>)}
                    {userAddress !== undefined && rewardInfo !== {} && (<Card
                        style={{
                            maxWidth: '47%',
                            marginTop: theme.spacing(6),
                            border: '1px solid #1B3448',
                            background:
                                'linear-gradient(180deg, #051827 0%, rgba(1, 12, 39, 0) 100%)',
                        }}
                    >
                        <Container>
                            <Stack>
                                <Stack
                                    direction={'row'}
                                    sx={{ paddingTop:theme.spacing(3), justifyContent: 'space-between' }}
                                >
                                        <Typography color="common.white">Total Testnet Points</Typography>
                                        <Typography color="common.white">{rewardInfo.points}</Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Typography color="common.white">Quiz Activity</Typography>
                                    <Typography color="common.white">not in json</Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Typography color="common.white">Early Contributor</Typography>
                                    <Typography color="common.white">not in json</Typography>
                                </Stack>
                                <Stack
                                    direction={'row'}
                                    sx={{ paddingTop:theme.spacing(3), paddingBottom:theme.spacing(3), justifyContent: 'space-between' }}
                                >
                                    <Typography color="common.white">$DIVA</Typography>
                                    <Typography color="common.white">{rewardInfo.reward}</Typography>
                                </Stack>
                            </Stack>

                        </Container>
                    </Card>)}
                    {userAddress !== undefined && rewardInfo === {} && ( <Typography sx={{ pt: theme.spacing(2)}} variant="h4">
                        You are not eligible for token claim.
                    </Typography>)}
                </Container>
            </Stack>

    )
}

export default Rewards