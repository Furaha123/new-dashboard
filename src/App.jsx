import React from "react";
import { BrowserRouter, Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import PaymentFill from "./components/PaymentFill";
import Payment from "./components/Payment";

import Landing from "./components/landing";
import Layout from "./components/layout";
import Request from "./components/request";
import Dashboard from "./Pages/home/Dashboard";
import ClientLayout from "./components/client/clientLayout";
import ClientDashboard from "./components/client/dashboard";
import DataTable from "./components/datatable/Lawyers";
// import Login from "./Pages/login/Login";
import Single_page from "./single_page/Single_page";
import Calendar from "./Pages/calendar/Calender";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import LaywerLayout from "./components/lawyer/laywerLayout";
import LawyerDashboard from "./components/lawyer/dashboard";
import Cases from "./Pages/cases/Cases";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/navbar/NavBar";
import User from "./components/user";

import Chat from "./components/Chat";
import Casestatus from "./components/Casestatus";
import Subscribe from "./single_page/Subscribe";
import LawyerChat from "./components/lawyer/chat";
import LawyerReport from "./components/lawyer/report";
import LawyerCase from "./components/lawyer/case";
import CaseDetails from "./components/lawyer/CaseDetails";
import LawyerSetting from "./components/lawyer/setting";
import Chating from "./Pages/chats/Chating";
import Contacts from "./components/datatable/Contacts";
import CaseLayout from "./components/lawyer/caseLayout";

import Lawyers from "./components/datatable/Lawyers";
// import { Appcontext } from "./components/context/Contextprovider";
import { Appcontext } from "./components/context/Contextprovider";

// import Chat from "./components/Chat";

import AdminProfile from "./Pages/ProfileAdmin/AdminProfile";

import Subscriptions from "./components/datatable/Subscriptions";
import SingleLawyer from "./Pages/single/SingleLawyer";

const DashboardLayout = () => {
  return (
    <div className="homeDash">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<User />} />
            <Route path="landing" element={<Landing />} />
            <Route path="consult" element={<Single_page />} />
            <Route path="Casestatus" element={<Casestatus />} />
            <Route path="Chat" element={<Chat />} />

            <Route path="/paymentfill" element={<PaymentFill />} />
            <Route path="/Payment" element={<Payment />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tours" element={<DataTable />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="calender" element={<Calendar />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="single/:_id" element={<Single />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="subs" element={<Subscriptions />} />
            <Route path="chats" element={<Chating />} />
            <Route path="lawyers" element={<Lawyers />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
          </Route>

          <Route path="/paymentfill" element={<Subscribe />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tours" element={<DataTable />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="calender" element={<Calendar />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="single/:_id" element={<Single />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="subs" element={<Subscriptions />} />
            <Route path="chats" element={<Chating />} />
            <Route path="lawyers" element={<Lawyers />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="singlelawyer/:_id" element={<SingleLawyer />} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
          </Route>

          <Route path="request" element={<Request />} />

          <Route path="client" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
          </Route>
          <Route path="/lawyer" element={<LaywerLayout />}>
            <Route index element={<LawyerDashboard />} />
            <Route path="chat" element={<LawyerChat />} />
            <Route path="report" element={<LawyerReport />} />
            <Route path="setting" element={<LawyerSetting />} />

            <Route path="/lawyer/cases" element={<CaseLayout />}>
              <Route index element={<LawyerCase />} />
              <Route path=":caseId" element={<CaseDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;
