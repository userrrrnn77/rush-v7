import "./styles/contact.css";
import relativeTime from "dayjs/plugin/relativeTime";
import CountUp from "react-countup";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoShareAndroid } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";

const loadUrlAPI = "https://testing-v7-rush-id.vercel.app";
const commentUrl = "https://testing-v7-rush-id.vercel.app/api/comments";
dayjs.extend(relativeTime);

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getComments, setGetComments] = useState([]);
  const [addComment, setAddComment] = useState({
    username: "",
    message: "",
    imageProfile: "",
  });
  const [pilihFile, setPilihFile] = useState(null);
  const [viewImage, setViewImage] = useState(false);

  const loadUrl = async () => {
    try {
      const reloadUrl = await axios.get(loadUrlAPI);
      if (reloadUrl.status === 200) {
        console.log("Server Awake! 😁");
      }
    } catch (error) {
      console.warn("Gagal Ping Server", error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadUrl();
    }, 240000);
    loadUrl();
    return () => clearInterval(interval);
  }, []);

  const getComment = async () => {
    try {
      await loadUrl();
      setIsLoading(true);
      const result = await axios.get(commentUrl);
      setGetComments(result.data.comments);
    } catch (error) {
      console.log("error || Terjadi alomani");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  const handleSubmitComment = async () => {
    if (!addComment.username || !addComment.message) {
      return Swal.fire({
        title: "Opps",
        text: "Please fill in all Fields! 😒",
        icon: "warning",
        theme: "dark",
      });
    }

    const formData = new FormData();
    formData.append("username", addComment.username);
    formData.append("message", addComment.message);

    if (pilihFile) {
      formData.append("imageProfile", pilihFile);
    }

    try {
      await loadUrl();
      await axios.post(commentUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      Swal.fire({
        title: "Success",
        text: "Comment Posted Successfully! 😆",
        icon: "success",
        theme: "dark",
      }).then((result) => {
        if (result.isConfirmed) {
          getComment();
        }
      });
      setAddComment({ username: "", message: "", imageProfile: "" });
      setViewImage(null);
      setPilihFile(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Failed",
        text: "Failed to Posted Comment! 😭",
        icon: "error",
        theme: "dark",
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c4aad0f0-1eee-4da5-9421-0c5972a0cd07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
        theme: "dark",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
        theme: "dark",
      });
    }
  };

  const fileInputRef = useRef();

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const commentLength = getComments.length;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        className="contact">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "linear" }}
          className="glowInContact"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "linear" }}
          className="glowInContactReverse"
        />
        <form onSubmit={onSubmit} className="contactcFormContainer">
          <div className="titleFormContact">
            <motion.div
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "linear" }}
              className="subtitleContact">
              <h1>Get In Touch</h1>
              <GoShareAndroid className="iconSubTitleContact" />
            </motion.div>
            <motion.p
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1, ease: "linear" }}
              className="messageContactFormSubTitle">
              Got a question? Send me a message, and I'll get back to you soon.
            </motion.p>
          </div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "linear" }}
            className="formInput">
            <label className="labelForm" htmlFor="">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="inputMode"
              required
            />
          </motion.div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: "linear" }}
            className="formInput">
            <label className="labelForm" htmlFor="">
              Your Number
            </label>
            <input
              type="text"
              name="number"
              inputMode="numeric"
              placeholder="Your Number"
              className="inputMode"
              required
            />
          </motion.div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: "linear" }}
            className="formInput">
            <label className="labelForm" htmlFor="">
              Your Message
            </label>
            <textarea
              required
              name="message"
              placeholder="Your Message"
              className="messageTextArea"></textarea>
          </motion.div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "linear" }}
            className="buttonSubmitAnjay">
            <button className="buttonSubmit" type="submit">
              Submit
            </button>
          </motion.div>
        </form>
        <div className="commentsContact">
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "linear" }}
            className="titleComments">
            <FiMessageSquare className="iconMessageBox" />
            <h1 className="commentTitleComment">
              Comments{" "}
              <span>
                (<CountUp end={commentLength} delay={4} duration={2} />)
              </span>
            </h1>
          </motion.div>
          <div className="atasUntukPostComment">
            <motion.input
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "linear" }}
              value={addComment.username}
              onChange={(e) =>
                setAddComment((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              type="text"
              placeholder="username"
              className="inputUntukComment"
            />
            <motion.textarea
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3, ease: "linear" }}
              value={addComment.message}
              onChange={(e) =>
                setAddComment((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              className="textAreaComment"
              placeholder="Your Message"></motion.textarea>
            <motion.div
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: "linear" }}
              onClick={handleIconClick}
              className="inputFileDiv">
              {viewImage ? (
                <img src={viewImage} className="imgView" />
              ) : (
                <FaCircleUser className="imgView" />
              )}
              <div className="centerField">
                <FaPlus onClick={handleIconClick} className="iconInputFile" />
                <span>Add Your Picture</span>
              </div>
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPilihFile(file);
                    setViewImage(URL.createObjectURL(file));
                  }
                }}
                ref={fileInputRef}
                type="file"
                className="inputFile"
                style={{ display: "none" }}
              />
            </motion.div>
            <motion.button
              style={{ position: "relative" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: "linear" }}
              className="buttonPostComment"
              onClick={handleSubmitComment}>
              Post Comment
            </motion.button>
          </div>
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "linear" }}
            className="bawahUntukGetComments">
            <div className="commentFieldGet">
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <div className="commentBoy" key={index}>
                      <div className="imageDanUsername">
                        <div className="skeleton imageProfileSkeleton" />
                        <div className="usernameDanMessage">
                          <div className="skeleton textSkeleton short" />
                          <div className="skeleton textSkeleton long" />
                        </div>
                      </div>
                      <div className="createdAt">
                        <div className="skeleton createdAtSkeleton" />
                      </div>
                    </div>
                  ))
                : getComments.map((comment) => (
                    <div className="commentBoy" key={comment._id}>
                      <div className="imageDanUsername">
                        {comment.imageProfile ? (
                          <img
                            className="imageProfile"
                            src={comment.imageProfile}
                            alt={comment.username}
                          />
                        ) : (
                          <FaCircleUser className="imageProfile" />
                        )}
                        <div className="usernameDanMessage">
                          <p className="usernameComment">{comment.username}</p>
                          <p className="messageComment">{comment.message}</p>
                        </div>
                      </div>
                      <div className="createdAt">
                        <p className="pCreatedAt">
                          {dayjs(comment.createdAt).fromNow()}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </motion.div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default Contact;
