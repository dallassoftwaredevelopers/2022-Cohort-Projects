import {json} from "@sveltejs/kit";

const spoonSearchUrl = 'https://api.spoonacular.com/recipes/complexSearch?';
const apiKey = "<API_KEY>"


const cacheMap: Map<string,any> = new Map();

// test json, so you can just have it return this instead of hitting a real API.
const test = `{
    "offset": 0,
    "number": 2,
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg"
        }
    ],
    "totalResults": 86
}`

export async function POST({request}: { request: Request }) {
    const data = await request.formData();
    const query = data.get('query') ?? 'halloween';

    if (typeof query != 'string'){
        return json({"error": "unexpected input"});
    }

    if (!cacheMap.has(query)) {
        const results = await fetch(spoonSearchUrl + new URLSearchParams({
            query: query,
            apiKey: apiKey,
        }));

        const data = await results.json();
        cacheMap.set(query,data);
    }

    return json(cacheMap.get(query));
}