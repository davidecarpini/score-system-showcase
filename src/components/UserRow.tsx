import { Button, Heading, HStack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

export const UserRow = ({
    index,
    currentPrize,
    setCurrentPrize,
}: {
    index: number;
    currentPrize: number;
    setCurrentPrize: Dispatch<SetStateAction<number>>;
}) => {
    const [xp, setXp] = useState(0);
    const [b3tr, setB3tr] = useState(0);
    const [numberOfExercises, setNumberOfExercises] = useState(0);

    const handleExercise = (exerciseXp: number) => () => {
        setXp((prev) => prev + exerciseXp);
        const gain = 100 / 2 ** numberOfExercises;
        const b3trGain = (currentPrize / 100) * gain;
        setB3tr((prev) => prev + b3trGain);
        setCurrentPrize((prev) => prev - b3trGain);
        setNumberOfExercises((prev) => prev + 1);
    };

    return (
        <HStack>
            <Heading>User {index}</Heading>
            <Text>
                you can win {(currentPrize / 2 ** numberOfExercises).toFixed(2)}{" "}
                B3TR
            </Text>
            <Button onClick={handleExercise(100)}>Squat (100 XP)</Button>
            <Button onClick={handleExercise(100)}>Pushups (100 XP)</Button>
            <Button onClick={handleExercise(100)}>
                Jumping Jacks (100 XP)
            </Button>
            <Text>{b3tr.toFixed(2)} B3TR</Text>-<Text>{xp} XP</Text>-
            <Text>{numberOfExercises} exercises completed</Text>
        </HStack>
    );
};
