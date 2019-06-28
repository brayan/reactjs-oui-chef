import { CookingStep } from "./CookingStep";

export class Recipe {
    constructor(readonly name: string, readonly steps: CookingStep[]) {}
}