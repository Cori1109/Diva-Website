import {Chip, Card, Container, Stack, Typography, useTheme } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import Header from "../../components/Header/Header";
import {useAppSelector} from "../../redux/hooks";
import {selectChainId, selectUserAddress} from "../../redux/appSlice";
import {useEffect, useState} from "react";
import rewards from "./rewards.json"
import {useCustomMediaQuery} from "../../hooks/useCustomMediaQuery";
const Rewards = () => {
    const { isMobile } = useCustomMediaQuery()
    const userAddress = useAppSelector(selectUserAddress)
    const chainId = useAppSelector(selectChainId)
    const theme = useTheme()
    const [rewardInfo, setRewardInfo] = useState<any>({})
    useEffect(() => {
        rewards.forEach((reward) => {
            if (reward.address === userAddress && reward.reward !== "") {
                setRewardInfo(reward)
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
                    {userAddress !== undefined && rewardInfo === {} && (
                        <Chip style={{ marginTop: theme.spacing(3), width: '47%', color:'white', background: 'orange'}} label={"Connected account was not registered for the testnet"} />
                    )}
                    {userAddress !== undefined && rewardInfo !== {} && (<Typography variant="body1">
                    You are eligible for token claim, below are the details of your participation.
                    </Typography>)}

                    {userAddress !== undefined && rewardInfo !== {} &&(
                        <Chip style={{ marginTop: theme.spacing(3), width: '47%', color:'white', background: 'orange'}} label={"You are not eligible. Reason: " + rewardInfo.comment} />
                    )}
                    {userAddress !== undefined && rewardInfo.comment === '' && (<Card
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
                                {/*<Stack*/}
                                {/*    direction={'row'}*/}
                                {/*    sx={{ justifyContent: 'space-between' }}*/}
                                {/*>*/}
                                {/*    <Typography color="common.white">Quiz Activity</Typography>*/}
                                {/*    <Typography color="common.white">not in json</Typography>*/}
                                {/*</Stack>*/}
                                {/*<Stack*/}
                                {/*    direction={'row'}*/}
                                {/*    sx={{ justifyContent: 'space-between' }}*/}
                                {/*>*/}
                                {/*    <Typography color="common.white">Early Contributor</Typography>*/}
                                {/*    <Typography color="common.white">not in json</Typography>*/}
                                {/*</Stack>*/}
                                <Stack
                                    direction={'row'}
                                    sx={{ paddingTop:theme.spacing(3), paddingBottom:theme.spacing(3), justifyContent: 'space-between' }}
                                >
                                    <Typography color="common.white">Your $DIVA token reward</Typography>
                                    <Typography color="common.white">{rewardInfo.reward}</Typography>
                                </Stack>
                            </Stack>

                        </Container>
                    </Card>)}
                    {userAddress !== undefined && rewardInfo.comment === '' && (
                        <Stack spacing={3}>
                            <LoadingButton
                                loading={chainId == null}
                                type="submit"
                                value="Submit"
                                sx={{ marginTop: theme.spacing(4), marginLeft: theme.spacing(6), width: '40%' }}
                                disabled={true}
                                style={{ background: 'darkgray', outline:'gray', color: 'white' }}
                            >
                                Claim
                            </LoadingButton>
                            <Chip style={{ width: '50%', color:'white', background: 'orange'}} variant="outlined" label="You will be able to claim your rewards once the token launches"/>
                        </Stack>
                    )}
                    {userAddress !== undefined && rewardInfo.comment === '' && ( <Typography sx={{ pt: theme.spacing(2)}} variant="h4">
                        You are not eligible for token claim.
                    </Typography>)}
                </Container>
            </Stack>

    )
}

export default Rewards