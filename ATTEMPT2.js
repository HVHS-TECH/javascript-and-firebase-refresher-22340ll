        import { 
            fb_initialise, 
            fb_signInWithGoogle, 
            fb_onAuthStateChanged, 
            fb_checkUserExists,
            fb_checkAdminStatus
        } from './fb_io.mjs';
        
        async function initAuth() {
            try {
                await fb_initialise();
                
                // Check if user is already signed in
                fb_onAuthStateChanged(async (user) => {
                    if (user) {
                        try {
                            const userExists = await fb_checkUserExists(user.uid);
                            if (userExists) {
                                // Check admin status and store in session
                                const isAdmin = await fb_checkAdminStatus(user.uid);
                                sessionStorage.setItem('isAdmin', isAdmin ? 'y' : 'n');
                                sessionStorage.setItem('userEmail', user.email);
                                
                                window.location.href = 'startscreen.html';
                            } else {
                                window.location.href = 'register.html';
                            }
                        } catch (error) {
                            console.error("Error checking user data:", error);
                            document.getElementById('auth-error').textContent = 
                                `Authentication error: ${error.message}`;
                            document.getElementById('auth-error').style.display = 'block';
                        }
                    }
                });
                
                document.getElementById('signInButton').addEventListener('click', async () => {
                    try {
                        const user = await fb_signInWithGoogle();
                        if (user) {
                            const userExists = await fb_checkUserExists(user.uid);
                            if (userExists) {
                                // Check admin status and store in session
                                const isAdmin = await fb_checkAdminStatus(user.uid);
                                sessionStorage.setItem('isAdmin', isAdmin ? 'y' : 'n');
                                sessionStorage.setItem('userEmail', user.email);
                                
                                window.location.href = 'startscreen.html';
                            } else {
                                window.location.href = 'register.html';
                            }
                        }
                    } catch (error) {
                        document.getElementById('auth-error').textContent = 
                            `Sign-in failed: ${error.message}`;
                        document.getElementById('auth-error').style.display = 'block';
                    }
                });
                
            } catch (error) {
                document.getElementById('auth-error').textContent = 
                    `Initialization error: ${error.message}`;
                document.getElementById('auth-error').style.display = 'block';
            }
        }
        
        initAuth();