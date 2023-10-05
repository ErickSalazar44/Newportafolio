export const handleMouseMove = (evt: MouseEvent, container: HTMLElement ) => {
    const { clientX, clientY } = evt;
    const { top, left, width, height } = container.getBoundingClientRect();

    const xRotation = -((clientY - top - height / 2) / height) * 6;
    const yRotation = ((clientX - left - width / 2) / width) * 6;
    const transformStyle = `
    perspective(800px)
    scale(1.01)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`;

    container.style.transform = transformStyle;
    container.style.transition = "none";
};

export const handleMouseOut = (container: HTMLElement | null) => {
    container.style.transition = "transform 0.5s ease-in-out"; 
    container.style.transform = `
        scale(1)
        rotateX(0)
        rotateY(0)
        `;
};
