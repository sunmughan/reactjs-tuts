// REACT JS CONTEXT API

const UserContext = React.createContext("SPIDER MAN");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
