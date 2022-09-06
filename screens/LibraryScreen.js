import React, { Component } from "react";
import { getCatergories } from "../database";


class LibraryScreen extends Component {
    state = {
        Catergories: {},
        loadedBookList: {},
    };

    


    refreshCatergories() {

    };


    render() {
        const Catergories = getCatergories();

        return (

        );
    };



};

const styles = StyleSheet.create({

});