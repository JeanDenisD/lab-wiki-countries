import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function CountryDetails({ countries }) {
    const { id } = useParams();
    const [countryDetails, setCountryDetails] = useState(countries)


    useEffect(() => {
        const filteredCountries = countries.filter(elm => {
            return elm.alpha3Code === id
        })
        console.log(filteredCountries)
        setCountryDetails(filteredCountries)
    }, [id])

    const findCountry = (id) => {
        const countryAtBorders = countries.find(country => country.alpha3Code === id)
        console.log(countryAtBorders.name.common)
        return countryAtBorders.name.common
    }

    return (
        <div >
            {countryDetails.map((elem) => {
                return (
                    <div className="col-7" key={elem.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={elem.name.official} />
                        <h1>{elem.name.official}</h1>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td style={{width:"30%"}}>Capital</td>
                                    <td>{elem.capital[0]}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{elem.area}</td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {elem.borders.map(e=>{
                                                return (
                                                    <div>
                                                        <Link to={`/${e}`}>
                                                            <li>{findCountry(e)}</li>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}

        </div>
    )
}

export default CountryDetails