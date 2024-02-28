import players from "../seed-data"
import { useParams } from "react-router-dom"
import { useState } from "react"

const StatsFormPage = () => {



    return (
        <>
            <h2 className="padding-top">New Stats Form</h2>
            <form className="padding-top column container">
                <div className="form-group">
                    <select className="col-6">
                        <option>A-Jo</option>
                        <option>annathekate14</option>
                    </select>
                </div>

                <button className="col-4 btn margin">Button</button>
            </form>
        </>

    )
}

export default StatsFormPage