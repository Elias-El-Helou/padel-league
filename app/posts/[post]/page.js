export default async function ShowPost(props){
    const {params} = await props;
    console.log('propssss: ',JSON.stringify(props));
    return(
        <div>
            post {params.post}
        </div>
    )
}   