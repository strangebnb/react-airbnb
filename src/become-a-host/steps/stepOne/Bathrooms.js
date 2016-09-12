<MuiThemeProvider>
                      <div>
                        <div className="lineItem">
                          <Home style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                              <Checkbox
                                checkedIcon={<SelectedCircle />}
                                uncheckedIcon={<OpenCircle />}
                                label="Entire place"
                                labelPosition="left"
                                style={styles.checkbox}
                              />
                            </div>
                        </div>
                        <div className="lineItem">
                        <Hotel style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                          <Checkbox
                              checkedIcon={<SelectedCircle />}
                              uncheckedIcon={<OpenCircle />}
                              label="Private room"
                              labelPosition="left"
                              disabled={false}
                              style={styles.checkbox}
                            />
                            </div>
                        </div>
                        <div className="lineItem">
                          <Seat style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                          <Checkbox
                              checkedIcon={<SelectedCircle />}
                              uncheckedIcon={<OpenCircle />}
                              label="Shared room"
                              labelPosition="left"
                              disabled={false}
                              style={styles.checkbox}
                            />
                            </div>
                        </div>
                      </div>

                      </MuiThemeProvider>
