import React from "react";
import styled from "styled-components";
import {
  FaExclamationCircle,
  FaCheckCircle,
  FaInfoCircle,
  FaTimesCircle,
} from "react-icons/fa";

type actionType = "success" | "error" | "warn" | "info";

export type ToastProps = {
  text?: string;
  type?: actionType;
  mobile?: "mobile" | "desktop";
};

const StyledToastWrapper = styled.div<ToastProps>`
  width: ${(props) => (props.mobile == "mobile" ? "320px" : "380px")};
`;

const StyledToastNotification = styled.div<ToastProps>`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border-left: 8px solid
    ${(props) =>
      props.type == "success"
        ? "#47D764"
        : props.type == "warn"
          ? "#FFC021"
          : props.type == "error"
            ? "#ff355b"
            : "#2F86EB"};
`;

const StyledToastIcon = styled.div<ToastProps>`
  color: ${(props) =>
    props.type == "success"
      ? "#47D764"
      : props.type == "warn"
        ? "#FFC021"
        : props.type == "error"
          ? "#ff355b"
          : "#2F86EB"};
  display: flex;
  justify-content: center;
  font-size: 32px;
`;

const StyledToastMessage = styled.div`
  width: 100%;
  color: #656565;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  text-align: justify;
`;

const iconType: Record<actionType, JSX.Element> = {
  success: <FaCheckCircle />,
  error: <FaTimesCircle />,
  warn: <FaExclamationCircle />,
  info: <FaInfoCircle />,
};

const Toast: React.FC<ToastProps> = ({ text, type, mobile }) => {
  return (
    <StyledToastWrapper mobile={mobile}>
      <StyledToastNotification type={type}>
        <StyledToastIcon type={type}>
          {type ? iconType[type] : <FaInfoCircle />}
        </StyledToastIcon>
        <StyledToastMessage>
          <p>{text}</p>
        </StyledToastMessage>
      </StyledToastNotification>
    </StyledToastWrapper>
  );
};

export default Toast;
