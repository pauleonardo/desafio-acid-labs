import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css"

function Item(props) {
    const {title, completed, id, handleDelete} = props;

    return (
        <div className="container-item">
            <div className="container-checkbox-item">
                <label className={
                    !completed ? 'checkbox-item' :
                        "checkbox-item checkbox-item--completed"}>
                    {title}
                    <input type="checkbox" defaultChecked={completed}/>
                    <span className="checkmark"></span>
                </label>

                <div className="checkbox-item-actions">
                    <i className="action">edit</i>
                    <i className="action action--delete"
                       onClick={() => handleDelete(id)}>delete
                    </i>
                </div>
            </div>
            <hr/>
        </div>
    )
}

Item.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.string,
    handleDelete: PropTypes.func,
};

export default Item;
