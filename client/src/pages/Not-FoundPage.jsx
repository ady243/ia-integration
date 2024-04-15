const NotFoundPage = () => {

 

    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-gray-600">
                    <div className="space-y-3 text-center">
                        <h3 className="text-indigo-600 font-semibold">
                            404 Error
                        </h3>
                        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                            Page not found
                        </p>
                        <p>
                            Sorry, the page you are looking for could not be found or has been removed.
                        </p>
                    </div>
                   <img src="https://zupimages.net/up/24/16/dlbq.png" alt="logo" className="mx-auto" style={{width: '200px'}} />
                </div>
            </div>
        </main>
    )
}


export default NotFoundPage;