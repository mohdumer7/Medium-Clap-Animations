import React, { Component, useState } from "react";
import mojs from "mo-js";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import styles from "./index.css";

/** ====================================
 *          🔰HOC
Higher Order Component for Animation
==================================== **/
const withClapAnimation = () => {
  return <h1>Hello Clap 2</h1>;
};

export default withClapAnimation;
