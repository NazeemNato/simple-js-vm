let PUSH = "PUSH", ADD = "ADD", SUB = "SUB", MUL = "MUL", DIV = "DIV";

let virtualMachine = (program) => {
    let counter = 0;
    let stack = [];
    let stackPointer = 0;
    let right, left

    while (counter < program.length) {
        let currentInstruction = program[counter];

        switch (currentInstruction) {
            case PUSH:
                stack[stackPointer] = program[counter + 1];
                stackPointer++;
                counter++;
                break;
            case ADD:
                right = stack[stackPointer - 1];
                stackPointer--;
                left = stack[stackPointer - 1];
                stackPointer--;
                stack[stackPointer] = left + right;
                stackPointer++;
                break;
            case SUB:
                right = stack[stackPointer - 1];
                stackPointer--;
                left = stack[stackPointer - 1];
                stackPointer--;
                stack[stackPointer] = left - right;
                stackPointer++;
                break;
            case MUL:
                right = stack[stackPointer - 1];
                stackPointer--;
                left = stack[stackPointer - 1];
                stackPointer--;
                stack[stackPointer] = left * right;
                stackPointer++;
                break;
            case DIV:
                right = stack[stackPointer - 1];
                stackPointer--;
                left = stack[stackPointer - 1];
                stackPointer--;
                stack[stackPointer] = left / right;
                stackPointer++;
                break;
        }
        counter++;
    }
    console.log(stack)
    return stack[stackPointer - 1];
}


let program = [
    PUSH, 1,
    PUSH, 2,
    ADD,
    PUSH, 5,
    SUB,
    PUSH, 10,
    MUL,
    PUSH, 20,
    DIV,
]

console.log("((( 1 + 2 ) - 5) * 10 ) / 20 = " + virtualMachine(program));