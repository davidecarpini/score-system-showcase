import {
    Container,
    Heading,
    HStack,
    Separator,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserRow } from "./components/UserRow";

const usersCount = 20;

function App() {
    const weeklyAllocation = 100_000;
    const B3trPerSecond = weeklyAllocation / 7 / 24 / 60 / 60;
    const [currentPrize, setCurrentPrize] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPrize((prev) => prev + B3trPerSecond);
        }, 1000);
        return () => clearInterval(interval);
    }, [B3trPerSecond]);

    return (
        <Container>
            <VStack>
                <HStack>
                    <Heading>Weekly allocation (B3TR)</Heading>
                    <Text>{weeklyAllocation.toFixed(2)} B3TR</Text>
                </HStack>
                <HStack>
                    <Heading>B3TR reward per second</Heading>
                    <Text>{B3trPerSecond.toFixed(2)} B3TR/Second</Text>
                </HStack>
                <HStack>
                    <Heading>Current prize</Heading>
                    <Text>{currentPrize.toFixed(2)} B3TR</Text>
                </HStack>
                <HStack>
                    <Heading>Current prize without device</Heading>
                    <Text>{(currentPrize / 10).toFixed(2)} B3TR</Text>
                </HStack>
            </VStack>
            <Spacer height={10} />

            <Separator />
            <Spacer height={10} />
            <VStack>
                {Array.from({ length: usersCount }).map((_, index) => (
                    <UserRow
                        key={index}
                        index={index}
                        currentPrize={currentPrize}
                        setCurrentPrize={setCurrentPrize}
                    />
                ))}
            </VStack>
        </Container>
    );
}

export default App;
