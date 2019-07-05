import { CookingStep } from "./CookingStep";

export class Recipe {
    constructor(readonly id: number, readonly name: string, readonly steps: CookingStep[]) {}
}