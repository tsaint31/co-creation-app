export default function getIdeas(state){
  return{
    ideas: state.ideasReducer.ideas,
    ideasByLikes: state.ideasReducer.ideasByLikes,
    userIdeas: state.ideasReducer.userIdeas,
    comments: state.ideasReducer.comments,
    useruuid: state.profileReducer.id_user
  }
}
