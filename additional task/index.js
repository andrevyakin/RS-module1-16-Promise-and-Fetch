const URL_POST_ID = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS_POST = "https://jsonplaceholder.typicode.com/comments?postId";

const createElement = (tag, attributes, parent) => {
    const element = document.createElement(tag);
    if (attributes.className)
        element.className = attributes.className;
    if (attributes.id)
        element.id = attributes.id;
    if (attributes.textContent)
        element.textContent = attributes.textContent;
    Array.from(document.querySelectorAll(parent)).at(-1).append(element);
};

const templateDisplaying = (post, comments) => {
    createElement("div", {id: "post", className: "post"}, "body");
    createElement("h1", {className: "post__title", textContent: `${post.title}`}, ".post");
    //Сделал тэг <p> вмето <b>, жирность сделал в css
    createElement("p", {className: "post__text", textContent: `${post.body}`}, ".post");
    createElement("p", {className: "post__comments-text", textContent: "Комментарии"}, ".post");
    createElement("div", {className: "post__comments"}, ".post");
    comments.forEach(comment => {
        createElement("div", {className: "post-comment"}, ".post__comments")
        createElement("span", {className: "post-comment__author", textContent: `${comment.email}`}, ".post-comment");
        createElement("span", {className: "post-comment__text", textContent: `${comment.body}`}, ".post-comment");
    })
}

const renderPost = async (postId) => {
    try {
        const responsePost = await fetch(`${URL_POST_ID}/${postId}`);
        const post = await responsePost.json();
        const responseComments = await fetch(`${URL_COMMENTS_POST}=${postId}`);
        const comments = await responseComments.json();
        templateDisplaying(post, comments);
    } catch (error) {
        console.error("Что-то пошло не так.", error)
    }
}

renderPost(1);

