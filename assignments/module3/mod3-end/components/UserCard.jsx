const UserCard = ({ name, email, status }) => {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>Email:{email}</h3>
      <h4>
        Status:
        {status ? "Active" : "Inactive"}
      </h4>
    </div>
  );
};

export default UserCard;
