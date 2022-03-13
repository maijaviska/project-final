function Tabs() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col mb-3 mt-3">
                    <h1 className="titles">About us</h1>

                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{color: "#1C0A00"}}>How To Adopt</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style={{color: "#1C0A00"}}>The Purrfect Bean Cafe</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style={{color: "#1C0A00"}}>The Cat Lounge</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">

                        {/* /// Adoption tab */}

                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-products-tab">
                            <div className="row">
                                <div className="col-4 d-flex flex-column align-items-center mt-4">
                                    <h2>1. Apply</h2>
                                    <p>Using the "Big Book of Kitties" located in the Cat Lounge, or the Our Cats page of the website, apply directly to the origin shelter of your desired kitty.</p>
                                    <img src="https://purrfectcup.ca/wp-content/uploads/2019/05/kittyart1.jpg" className="figure-img img-fluid rounded" alt="..." />
                                </div>
                                <div className="col-4 d-flex flex-column align-items-center mt-4">
                                    <h2>2. Interview</h2>
                                    <p>All of our affiliate shelters have some sort of interview process to learn more about you and the potential home for their cats - don't worry, just be you!</p>
                                    <img src="https://purrfectcup.ca/wp-content/uploads/2019/05/kittyart3.jpg" className="figure-img img-fluid rounded" alt="..." />
                                </div>
                                <div className="col-4 d-flex flex-column align-items-center mt-4">
                                    <h2>3. Pick-up</h2>
                                    <p>Once you have been approved by the affiliate shelter we will be able to arrange a pick-up for your furball!</p>
                                    <img src="https://purrfectcup.ca/wp-content/uploads/2019/05/kittyart2.jpg" className="figure-img img-fluid rounded" alt="..." />
                                </div>
                            </div>
                        </div>

                        {/* /// Cafe tab */}

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-address-tab">

                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="https://images.pexels.com/photos/11170412/pexels-photo-11170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="figure-img img-fluid rounded p-3" alt="..." />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h2>The Purrfect Bean Cafe</h2>
                                    <p>This cafe was born of two simple passions; The love of top quality coffee and the desire to rescue cats. With this cafe and cat lounge, we aim to bring awareness to our furry little friends and to help them find their furrever homes. We wish to provide a safe and comforting environment for these rescue animals so please follow the rules. This will allow us to continue operation for years to come and, most importantly, help more cats.</p>
                                </div>
                            </div>

                        </div>

                        {/* /// Lounge tab */}
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-summary-tab">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="https://images.pexels.com/photos/9518884/pexels-photo-9518884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="figure-img img-fluid rounded p-3" alt="..." />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h2>The Cat Lounge</h2>
                                    <p>Our state-of-the-art Cat Lounge is located to the rear of our Cafe through glass windows and doors - keeping the coffee and treats free of kitty fur, as well as allowing visitors with cat allergies to visit and enjoy from a safe distance! The lounge features floor seating with tables, games, books, plenty of kitty toys, as well as a full wall of perches and bridges for our adventurous furballs. The lounge also hosts events such as Cat Yoga, Gift Wrapping, and is available for private event bookings.</p>
                                    <ol>
                                        <li>All visitors need to sign a waiver. Don't worry, our furrballs aren't vicious, this is simply an insurance requirement.</li>
                                        <li>Parents please accompany children under 13. The Cat Lounge isn't constantly supervised so we ask that parents please help in keeping the kitties happy and safe.</li>
                                        <li>Please remove your shoes. We strive to keep the Cat Lounge clean and comfortable for both visitors, and kitties.</li>
                                        <li>Be gentle and don't chase the cats. Let them come to you! A lot of our cats are rescue animals so this rule is very important.</li>
                                        <li>Please do not pick up the cats. If they want to come and be social they will climb up onto your lap on their own!</li>
                                        <li>No outside animals. Unfortunately as per health regulations you cannot bring your own kitty - dont worry, we have lots!</li>
                                        <li>Do not feed the cats. The cats in our care are on supervised diets and may have specific dietary restrictions and allergies.</li>
                                        <li>No food or drink is allowed back into the cafe once it has entered the cat lounge. This is an important health code restriction so we ask that any food or drink brought into the lounge is finished and discarded before re-entering the cafe.</li>
                                    </ol>
                                    <p>The safety and welfare of our kitties is a top priority at The Purrfect Bean and we ask that all of our visitors keep that in mind. Help us keep the Cat Lounge a fun and safe place for rescue kitties to play, find love and friends!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tabs