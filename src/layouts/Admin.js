import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import CreateWidget from "views/pages/createwidget/CreateWidget";
import HeaderStats from "components/Headers/HeaderStats";
import Donation from "views/pages/donation/Donation";
import PaymentForm from "views/pages/paymentform/PaymentForm";
import QuickPay from "views/pages/quickpay/QuickPay";
import Faq from "views/pages/faq/Faq";
import CustomForm from "views/pages/customform/CustomForm";
import Buynowbutton from "views/pages/buynowbutton/Buynowbutton";
import Parammapper from "views/pages/parammapper/Parammapper";

export default function Admin() {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-900">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            {/* Manually added */}
            <Route path="/admin/createwidget" exact component={CreateWidget} />
            <Route path="/admin/createwidget/quickpay" component={QuickPay} />
            <Route path="/admin/createwidget/donation" component={Donation} />
            <Route path="/admin/createwidget/buynowbutton" exact component={Buynowbutton} />
            <Route path='/admin/createwidget/customform' component={CustomForm} />
            <Route path="/admin/parammapper" exact component={Parammapper} />
            <Route path="/admin/payment-form" exact component={PaymentForm} />
            <Route path="/admin/faq" exact component={Faq} />


            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
