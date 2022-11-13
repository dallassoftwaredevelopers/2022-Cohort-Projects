import * as halloween from './halloween_recipes.json';
import {json} from "@sveltejs/kit";

export function GET() {
    return json(halloween);
}