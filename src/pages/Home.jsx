import React from "react";
import products from "../resources/products.json";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  Chart,
  ChartSeries,
  ChartLegend,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
} from "@progress/kendo-react-charts";
import { StackLayout } from "@progress/kendo-react-layout";
import donutData from "../resources/donut-data.json";

const chartData = [1, 2, 3, 5, 8, 13];
const labelContent = (e) => e.category;

const Home = () => {
  return (
    <div id="Home" className="home-page">
      <StackLayout>
        <div className="k-flex-70">
          <div className="card-container">
            <Chart>
              <ChartTitle text="Chart A" />
              <ChartSeries>
                <ChartSeriesItem data={chartData} name="Fibonacci" />
              </ChartSeries>
            </Chart>
          </div>
        </div>
        <div className="k-flex-30">
          <div className="card-container">
            <Chart>
              <ChartTitle text="Chart B" />

              <ChartSeries>
                <ChartSeriesItem
                  type="donut"
                  data={donutData}
                  categoryField="kind"
                  field="share"
                >
                  <ChartSeriesLabels
                    color="#fff"
                    background="none"
                    content={labelContent}
                  />
                </ChartSeriesItem>
              </ChartSeries>
              <ChartLegend visible={false} />
            </Chart>
          </div>
        </div>
      </StackLayout>

      <div className="card-container">
        <Grid style={{ height: "500px" }} data={products}>
          {" "}
          <GridColumn field="ProductID" title="ID" width="40px" />
          <GridColumn field="ProductName" title="Name" width="250px" />
          <GridColumn field="Category.CategoryName" title="CategoryName" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="UnitsInStock" title="In stock" />
        </Grid>
      </div>
    </div>
  );
};

export default Home;
