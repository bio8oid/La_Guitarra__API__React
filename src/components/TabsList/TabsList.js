import React from 'react';
import './TabsList.scss';

class TabsList extends React.Component {

    state = {
        page: 1,
        tabsList: []
    }

    handlePage = () => e => {
        let id = e.target.id;
        this.setState({ page: id });
    }

    static getDerivedStateFromProps(props, tabsList) {
        if (props.tabsList !== tabsList) {
            return { tabsList: props.tabsList };
        }
        else return tabsList;
    }

    render() {

        console.log(this.props.tabsList)

        const dataset = this.props.tabsList;
        const pageSet = this.state.page;
        const offset = (pageSet - 1) * 10
        const paginatedItems = dataset.slice(offset).slice(0, 10)
        const pages = Math.ceil(dataset.length / 10);
        const pageNumbers = Array.from({ length: pages }, (x, page) => ++page);

        return (

            <div className="list-wrapper">

                {paginatedItems.map(item => (

                    <div className="list-item" key={item.id}>
                        <h3>{item.artist.name}</h3>
                        <div className="image-and-tags-wrapper">
                            {/* <img className="list-image" alt="thubnail" src={item.recipe.image} /> */}
                <p>{item.title}</p>
                            <div className="list-ingredients-tags">
                                {item.tabTypes.map((item, index) => (
                                    <a key={index} className="tag" href="https://www.lidl.com/" target="blank">{item}</a>))}
                            </div>
                        </div>
                        {/* <a className="list-item-link" href={item.recipe.url} target="blank">link to recipe</a> */}
                    </div>))}

                <div>
                    {pageNumbers.map(id => {
                        return (
                            <button className="pagination-button" id={id} key={id} onClick={this.handlePage(id)}>{id}</button>
                        );
                    })}
                </div>

            </div>

        )
    }
}

export default TabsList;