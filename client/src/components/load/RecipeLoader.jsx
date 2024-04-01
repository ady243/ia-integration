import "./recipe.css";


const RecipeLoader = () => {

    const styleLoader = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }

    
    return (
        <div className="loader" style={styleLoader}>
            <div className="panWrapper">
                <div className="pan">
                <div className="food"></div>
                <div className="panBase"></div>
                <div className="panHandle"></div>
                </div>
                <div className="panShadow"></div>
        </div>
        </div>

    );
    }

export default RecipeLoader;