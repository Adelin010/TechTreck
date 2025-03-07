const post  ={
    info: 12, 
    name: "alex",
    generator: () => "Generated"
};

const getPost = () => post;
export {getPost};
/**
 * Or by writting export const getPost = () => post;
 * when exporting we can use export default <var> so that 
 * when importing we don't need destructuring 
 * We can also combine the default exporting and the non default exporting 
 * !!!! there can be only one default exporting
 */