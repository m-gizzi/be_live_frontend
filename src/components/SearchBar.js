import React from "react";

const SearchBar = (props) => {
    return (
        <div className="row">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">search</i>
                <input onChange={props.handleSearchTermChange} id="icon_prefix" type="text" className="validate" value={props.searchTerm} placeholder="Search tags, event names, etc." />
                </div>
                <div className="input-field col s3">
                    <p>
                        <label>
                            <input onChange={props.handleFilterChange} name="publicOnly" type="checkbox" className="filled-in"/>
                            <span>Public only</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input onChange={props.handleFilterChange} name='currentlyOngoing' type="checkbox" className="filled-in"/>
                            <span>Currently ongoing</span>
                        </label>
                    </p>
                </div>
                <div className="input-field col s3">
                    <p>
                        <label>
                            <input onChange={props.handleFilterChange} name='userRSVPd' type="checkbox" className="filled-in"/>
                            <span>You've RSVP'd</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input onChange={props.handleFilterChange} name='norwegian' type="checkbox" className="filled-in"/>
                            <span>Norwegian Death Metal</span>
                        </label>
                    </p>
                </div>
            </div>
            </form>
        </div>
    )
}

export default SearchBar