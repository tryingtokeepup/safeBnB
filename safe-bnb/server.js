const express = require('express');
const next = require('next');

// take the port, make sure you're in base 10, or default to 3000
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
