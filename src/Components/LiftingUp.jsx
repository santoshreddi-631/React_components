function LiftingUp({name , setName = () => {}}){
    return(
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
        </div>
    );
}
export default LiftingUp;