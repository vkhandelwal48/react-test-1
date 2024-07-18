import { configure, fireEvent, render, screen } from '@testing-library/react';
import renderer from "react-test-renderer"
import App from './App';
import handleOtherMethod from './helper';
//import Users from './Users';

// test("class component method testing",()=>{
//   const componentData=renderer.create(<Users />).getInstance();
//   expect(componentData.getUsersList()).toMatch("user list");
// })

// test("method testing case 1",()=>{
//   render(<App />);
//   const btn=screen.getByTestId("btn1");
//   fireEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// })

// test("method testing case 2",()=>{
//   expect(handleOtherMethod()).toMatch("hi");
// })

// test("get by role",()=>{
//   render(<App />);
//   const inputField= screen.getByRole("textbox");
//   const btn=screen.getByRole("button");
//   expect(inputField).toBeInTheDocument();
//   expect(inputField).toHaveValue("Hello");
//   expect(inputField).toBeDisabled();
//   expect(btn).toBeInTheDocument();
// })

// test("getByRole Testing",()=>{
//   render(<App />);
//   const btn1=screen.getByRole("button",{name:"Click 1"});
//   const btn2=screen.getByRole("button",{name:"Click 2"});
//   const input1=screen.getByRole("textbox",{name:"User Name"});
//   const input2=screen.getByRole("textbox",{name:"User Age"});
//   const dv=screen.getByRole("dummy");
//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
//   expect(input1).toBeInTheDocument();
//   expect(input2).toBeInTheDocument();
//   expect(dv).toBeInTheDocument();
// })

// test("getAllByRole",()=>{
//   render(<App />);
//   const btns=screen.getAllByRole("button");
//   const options=screen.getAllByRole("option");
//   for(let i=0;i<btns.length;i++){
//     expect(btns[i]).toBeInTheDocument();
//   }
//   for(let i=0;i<btns.length;i++){
//     expect(options[i]).toBeInTheDocument();
//   }
// })

// test("getByLabelText",()=>{
//   render(<App />);
//   const input=screen.getByLabelText("Username");
//   const checkbox=screen.getByLabelText("Skills")
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Vidit");
//   expect(checkbox).toBeInTheDocument();
// })

// test("getAllByLabelText",()=>{
//   render(<App />);
//   const  inputs=screen.getAllByLabelText("Username");
//   for(let i=0;i<inputs.length;i++){
//     expect(inputs[i]).toBeInTheDocument();
//     expect(inputs[i]).toHaveValue("Vidit");
//   }
// })

// test("getAllByLabelText",()=>{
//   render(<App />);
//   const  checkbox=screen.getAllByLabelText("Skills");
//   for(let i=0;i<checkbox.length;i++){
//     expect(checkbox[i]).toBeInTheDocument();
//     expect(checkbox[i]).toBeChecked();
//   }
// })

// test("getByPlaeholderText",()=>{
//   render(<App />);
//   const input = screen.getByPlaceholderText("enter username");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Vidit");
// })

// test("getAllByPlaeholderText",()=>{
//   render(<App />);
//   const inputs = screen.getAllByPlaceholderText("enter username");
//   for(let i=0;i<inputs.length;i++){
//     expect(inputs[i]).toBeInTheDocument();
//     expect(inputs[i]).toHaveValue("Vidit");
//   }
// })

// test("getByText",()=>{
//   render(<App />);
//   const btn = screen.getByText("Login");//case sensitive
//   expect(btn).toBeInTheDocument();
//   const p = screen.getByText("P tag testing");
//   expect(p).toBeInTheDocument();
//   expect(p).toHaveClass("kho");
//   expect(p).toHaveAttribute("id");
// })

// test("getAllByText",()=>{
//   render(<App />);
//   const p = screen.getAllByText("P tag testing");
//   for(let i=0;i<p.length;i++){
//     expect(p[i]).toBeInTheDocument();
//   }
// })

// test("getByTestId",()=>{
//   render(<App />);
//   const div = screen.getByTestId("div-test-id");
//   const h2 = screen.getByTestId("h2-test-id");
//   expect(div).toBeInTheDocument();
//   expect(h2).toBeInTheDocument();
// })

// test("getAllByTestId",()=>{
//   render(<App />);
//   const div = screen.getAllByTestId("div-test-id");
//   for(let i=0;i<div.length;i++){
//     expect(div[i]).toBeInTheDocument();
//   }
// })

// configure({testIdAttribute :'element-id'});
// test("test div with data test id",()=>{
//   render(<App />);
//   const div = screen.getByTestId("test-div");
//   expect(div).toBeInTheDocument();
// })

// test("getByDisplayValue",()=>{
//   render(<App />);
//   const input = screen.getByDisplayValue("Vidit");
//   const textarea =screen.getByDisplayValue("Vidit Khandelwal");
//   expect(input).toBeInTheDocument();
//   expect(textarea).toBeInTheDocument();
// })

// test("getAllByDisplayValue",()=>{
//   render(<App />);
//   const inputs = screen.getAllByDisplayValue("Vidit");
//   for(let i=0;i<inputs.length;i++){
//     expect(inputs[i]).toBeInTheDocument();
//   }
// })

// test("getByTitle",()=>{
//   render(<App />);
//   const btn = screen.getByTitle("click");
//   expect(btn).toBeInTheDocument();
// })

// test("getAllByTitle",()=>{
//   render(<App />);
//   const btns = screen.getAllByTitle("click");
//   for(let i=0;i<btns.length;i++){
//     expect(btns[i]).toBeInTheDocument();
//   }
// })

// test("getByAltText",()=>{
//   render(<App />);
//   const img = screen.getByAltText("Vidit");
//   expect(img).toBeInTheDocument();
// })

// test("getAllByAltText",()=>{
//   render(<App />);
//   const imgs = screen.getAllByAltText("Vidit");
//   for(let i=0;i<imgs.length;i++){
//     expect(imgs[i]).toBeInTheDocument();
//   }
// })