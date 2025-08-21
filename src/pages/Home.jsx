import React, {useState} from 'react'
import axios from 'axios'

const Home = () => {

    const [idea, setIdea] = useState("");
    const [category, setCategory] = useState("AI Saas");
    const [result, setresult] = useState("");
    const [loading, setloading] = useState(false);

    const handleGenerate = async() => {
        
        setloading(true);
        setresult("")

        const response = await axios.post (
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "nousresearch/deephermes-3-llama-3-8b-preview:free",
                messages: [
                    {
                        role:"user",
                        content:`You are an expert front-end developer.
                            Generate a fully responsive and visually beautiful landing page using plain HTML and Tailwind CSS.

                            The landing page is for a product in the ${category} category called "${idea}".

                            Requirements:

                            At the top, include a large bold heading with the product name.

                            Add a short subheading with one or two sentences describing the product.

                            Create a features section with exactly three feature cards, arranged in a responsive grid layout.

                            Each card must include:

                            An emoji or icon.

                            A short feature title.

                            A brief one-line description.

                            At the bottom, add a call-to-action button (for example: “Get Started” or “Buy Now”).

                            Design Rules:

                            Use this color palette:

                            Light background: #F8FAFC (slate-50).

                            Dark background: #0F172A (slate-900).

                            Primary accent: #6366F1 (indigo-500).

                            Secondary accent: #F43F5E (rose-500).

                            Card background (light): #FFFFFF with shadow.

                            Card background (dark): #1E293B (slate-800).

                            Add rounded corners, soft shadows, hover animations, and spacing.

                            Ensure the design is responsive on desktop and mobile.

                            Output Rules:

                            Return only valid HTML code.

                            Use Tailwind classes for styling.

                            Do not include explanations, comments, or extra text outside of the HTML.`,
                    },
                ],
            },
            {
                headers: {
                    Authorization:`Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}` ,
                    "Content-Type":"application/json",
                    "HTTP-Referer":"http://localhost:5173",
                    "X-Title":"My Landing Page Generator"
                }
            }
        )
        setresult(response.data.choices[0].message.content);
        setloading(false);
    }
    const copyCode = () => {
        navigator.clipboard.writeText(result);
        alert("Copied to clipboard!");
    }

    return (

    <div>
        <div className='min-h-screen bg-[#F6F5FF] px-4 py-10 font-sans '>
            <div className='max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8'>
                <h1 className='text-3xl font-bold text-center text-purple-700 mb-6'>
                    AI Landing Page Generator
                </h1>

                <input type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder='Enter a produxt idea (e.g: Travel, shopping)'
                className='w-full border p-3 border-gray-300 rounded-lg mb-4' />

                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full border p-3 border-gray-300 rounded-lg mb-4'>
                    <option value="AI Saas">AI Saas</option>
                    <option value="Productive Tools">Productive Tools</option>
                    <option value="Startup">Startup</option>
                </select>

                <button
                className='w-full text-md font-bold text-white bg-purple-700 rounded-lg py-2 hover:bg-purple-800'
                onClick={handleGenerate}>
                    {loading ? "Generating..." : "Generate Landing Page"}
                </button>

                {result && (
                    <div className='mt-10'>
                        <h2 className='text-xl mb-3 font-bold'>Live preview</h2>

                        <div className='border p-5 rounded-lg mb-2' dangerouslySetInnerHTML={{
                            __html:result
                        }}/>

                        <div className='mt-6'>
                            <h3 className='text-lg font-semibold mb-2'>HTML Code:</h3>
                            <button
                            className='px-4  text-md font-bold text-white bg-gray-700 rounded-lg py-2 hover:bg-gray-800'
                            onClick={copyCode}>
                                Copy Code
                            </button>
                            <pre className='bg-black text-white p-4 text-sm overflow-auto rounded-lg mt-2'>
                                {result}
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Home