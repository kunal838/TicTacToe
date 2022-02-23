
import { isTerminal, getAvailableMoves } from "./board";

export const getBestMove = (
    state,
    maximizing,
    depth = 0,
    maxDepth = -1
) => {
    const childValues = {};

    const getBestMoveRecursive = (
        state,
        maximizing,
        depth = 0,
        maxDepth = -1
    ) => {
        const terminalObject = isTerminal(state);
        if (terminalObject || depth === maxDepth) {
            if (terminalObject && terminalObject.winner === "x") {
                return 100 - depth;
            } else if (terminalObject && terminalObject.winner === "o") {
                return -100 + depth;
            }
            return 0;
        }

        if (maximizing) {
            let best = -100;
            getAvailableMoves(state).forEach(index => {
                const child = [...state];
                child[index] = "x";
                const childValue = getBestMoveRecursive(child, false, depth + 1, maxDepth);
                best = Math.max(best, childValue);
                if (depth === 0) {
                    childValues[childValue] = childValues[childValue]
                        ? `${childValues[childValue]},${index}`
                        : `${index}`;
                }
            });
            if (depth === 0) {
                const arr = childValues[best].split(",");
                const rand = Math.floor(Math.random() * arr.length);
                return parseInt(arr[rand]);
            }
            return best;
        } else {
            let best = 100;
            getAvailableMoves(state).forEach(index => {
                const child = [...state];
                child[index] = "o";
                const childValue = getBestMoveRecursive(child, true, depth + 1, maxDepth);
                best = Math.min(best, childValue);
                if (depth === 0) {
                    childValues[childValue] = childValues[childValue]
                        ? `${childValues[childValue]},${index}`
                        : `${index}`;
                }
            });
            if (depth === 0) {
                const arr = childValues[best].split(",");
                const rand = Math.floor(Math.random() * arr.length);
                return parseInt(arr[rand]);
            }
            return best;
        }
    };
    return getBestMoveRecursive(state, maximizing, depth, maxDepth);
};