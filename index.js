const content = document.querySelector('#content');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const counter = document.querySelector('#counter');
const paragraphs = [
    `
    <h2>What Trees Give Us</h2>
    <p id='p'>
    Trees are one of the most valuable natural resources on Earth, providing a wide range of benefits to both the environment and human life.<br>
    They produce oxygen, which is essential for our survival, and absorb carbon dioxide, helping to reduce the impact of climate change.<br>
    Trees also provide shade, cooling the air and creating comfortable spaces for people and animals.<br>
    In addition, many creatures rely on trees for food and shelter, making forests critical for biodiversity.
    </p>
    `,
    `
    <h2>Why Trees Are Important</h2>
    <p id='p'>
    Beyond providing us with fresh air and shelter, trees play a crucial role in protecting our environment.<br>
    Their roots prevent soil erosion by holding the ground together, and they absorb excess rainwater, reducing the risk of flooding.<br>
    Trees also help fight climate change by trapping carbon and cooling down the planet.<br>
    They make our surroundings beautiful and peaceful, improving our mental and physical well-being.
    </p>
    `,
    `
    <h2>Why We Shouldn't Cut Down Trees</h2>
    <p id='p'>
    Despite their importance, deforestation continues to threaten the balance of nature.<br>
    Cutting down trees irresponsibly leads to habitat loss, climate changes, and increased natural disasters.<br>
    Without forests, oxygen levels drop, carbon emissions rise, and animals lose their homes.<br>
    Instead of destroying trees, we must find sustainable ways to use natural resources and ensure forests remain intact for future generations.
    </p>
    `,
    `
    <h2>How We Can Help</h2>
    <p id='p'>
    Protecting trees is a responsibility we all share.<br>
    By planting new trees, reducing waste, and supporting reforestation programs, we can contribute to a greener world.<br>
    Choosing sustainable products, raising awareness, and advocating for environmental policies can also make a significant difference.<br>
    Small actions lead to big changes, and together, we can ensure a future where trees continue to thrive and support life on Earth.
    </p>
    `
]
let index = 0;
counter.textContent = `${index + 1} / ${paragraphs.length}`;
content.innerHTML = paragraphs[0];

next.addEventListener('click', () => {
    if (index < paragraphs.length - 1) {
        index++;
        content.innerHTML = paragraphs[index];
        counter.textContent = `${index + 1} / ${paragraphs.length}`;
    }
});
back.addEventListener('click', () => {
    if (index > 0) {
        index--;
        content.innerHTML = paragraphs[index];
        counter.textContent = `${index + 1} / ${paragraphs.length}`;
    }
})