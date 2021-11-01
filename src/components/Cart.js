import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import GooglePayButton from "@google-pay/button-react";
import { useHistory } from "react-router";

const Cart = () => {
	const state = useSelector((state) => state.handleCart);
	const [total, setTotal] = useState(
		state.reduce((prev, cur) => {
			console.log(cur.price);
			return prev + cur.price;
		}, 0)
	);
	const [loading, setLoading] = useState(false);

	let history = useHistory();

	useEffect(() => {
		if (!localStorage.getItem("auth-token")) {
			history.push("/");
		}
		const total = state.reduce((prev, cur) => {
			return prev + cur.price;
		}, 0);
		setLoading(true);
	});

	const dispatch = useDispatch();
	const addProduct = (product) => {
		let result = total;
		result += product.price;
		setTotal(result);
		dispatch(addCart(product));
	};

	const delProduct = (product) => {
		let result = total;
		result -= product.price;
		setTotal(result);
		dispatch(delCart(product));
	};

	const ShowTotal = () => {
		return (
			<>
				<h1>Total: {total.toFixed(2)}</h1>
				<GooglePayButton
					environment="TEST"
					buttonColor="black"
					buttonType="checkout"
					paymentRequest={{
						apiVersion: 2,
						apiVersionMinor: 0,
						allowedPaymentMethods: [
							{
								type: "CARD",
								parameters: {
									allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
									allowedCardNetworks: ["MASTERCARD", "VISA"],
								},
								tokenizationSpecification: {
									type: "PAYMENT_GATEWAY",
									parameters: {
										gateway: "example",
										gatewayMerchantId: "exampleGatewayMerchantId",
									},
								},
							},
						],
						merchantInfo: {
							merchantId: "12345678901234567890",
							merchantName: "Demo Merchant",
						},
						transactionInfo: {
							totalPriceStatus: "FINAL",
							totalPriceLabel: "Total",
							totalPrice: "100.00",
							currencyCode: "USD",
							countryCode: "US",
						},
					}}
					onLoadPaymentData={(paymentRequest) => {
						console.log("load payment data", paymentRequest);
					}}
				/>
			</>
		);
	};

	return (
		<div className="my-5 mx-5">
			{state.map((product) => (
				<div className="row">
					<div className="col-md-4">
						<img
							src={product.image}
							alt={product.title}
							height="200px"
							width="180px"
						/>
					</div>
					<div className="col-md-4">
						<h3>{product.title}</h3>
						<p className="lead fw-bold">
							{product.qty} X Rs.{product.price} = Rs.
							{product.qty * product.price}
						</p>
						<button
							className="btn btn-outline-dark me-4"
							onClick={() => delProduct(product)}
						>
							<i className="fa fa-minus"></i>
						</button>
						<button
							className="btn btn-outline-dark me-4"
							onClick={() => addProduct(product)}
						>
							<i className="fa fa-plus"></i>
						</button>
					</div>
				</div>
			))}
			<div className="my-5">{loading ? <ShowTotal /> : ""}</div>
		</div>
	);
};

export default Cart;
