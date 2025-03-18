document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration
    const userData = {
        points: 750,
        nextReward: 1000,
        streak: 5,
        weeklyStreak: [true, true, true, true, true, false, false], // M, T, W, T, F, S, S
        wasteDeposits: 24,
        kgRecycled: 18,
        activities: [
            {
                type: 'recycle',
                location: 'Central Park Bin #12',
                time: 'Today, 10:30 AM',
                category: 'Recyclable',
                points: 15
            },
            {
                type: 'trash',
                location: 'Chandni Chowk Bin #9' ,
                time: 'Yesterday, 3:45 PM',
                category: 'General',
                points: 10
            },
            {
                type: 'achievement',
                title: 'Achievement Unlocked: 3-Day Streak',
                time: 'Yesterday, 3:45 PM',
                points: 25
            }
        ]
    };

    // Leaderboard data
    const leaderboardData = [
        { rank: 1, name: 'Arjun Kumar', initials: 'AK', points: 1240, deposits: 42, streak: 7 },
        { rank: 2, name: 'Jaspreet Chauhan', initials: 'JC', points: 980, deposits: 35, streak: 5 },
        { rank: 3, name: 'Tanvi Wadhwa', initials: 'TW', points: 840, deposits: 30, streak: 4 },
        { rank: 4, name: 'Jai Singh', initials: 'JS', points: 720, deposits: 28, streak: 3 },
        { rank: 5, name: 'Chandan Joshi', initials: 'CJ', points: 680, deposits: 25, streak: 6 },
        { rank: 6, name: 'Meera Lal', initials: 'ML', points: 650, deposits: 24, streak: 2 },
        { rank: 7, name: 'Ravi Bhatia', initials: 'RB', points: 620, deposits: 22, streak: 3 },
        { rank: 8, name: 'Jai Desai', initials: 'JD', points: 580, deposits: 20, streak: 4 },
        { rank: 9, name: 'Sanya Walia', initials: 'SW', points: 540, deposits: 18, streak: 2 },
        { rank: 10, name: 'Priya Gupta', initials: 'PG', points: 510, deposits: 17, streak: 1 }
    ];

    // Navigation
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.sidebar nav ul li');
    const viewLeaderboardBtn = document.querySelector('.view-all-btn');

    // Set default active page
    let currentPage = 'dashboardPage';
    document.getElementById(currentPage).style.display = 'block';

    // Navigation click handler
    function handleNavigation(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });

        // Remove active class from all nav items
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Show selected page
        document.getElementById(pageId).style.display = 'block';

        // Add active class to current nav item
        if (pageId === 'dashboardPage') {
            // No nav item to highlight for dashboard
        } else {
            document.querySelector(`[data-page="${pageId.replace('Page', '')}"]`).classList.add('active');
        }

        currentPage = pageId;
    }

    // Add click event to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page') + 'Page';
            handleNavigation(pageId);
        });
    });

    // View Leaderboard button
    if (viewLeaderboardBtn) {
        viewLeaderboardBtn.addEventListener('click', function() {
            handleNavigation('leaderboardPage');
        });
    }

    // Populate leaderboard
    function populateLeaderboard() {
        const leaderboardBody = document.querySelector('.leaderboard-body');
        if (!leaderboardBody) return;

        leaderboardBody.innerHTML = '';

        leaderboardData.forEach(user => {
            const row = document.createElement('div');
            row.className = 'leaderboard-row';
            
            // Highlight current user (John Doe)
            const isCurrentUser = user.name === 'John Doe';
            if (isCurrentUser) {
                row.style.backgroundColor = 'rgba(78, 204, 163, 0.1)';
                row.style.borderLeft = '3px solid var(--accent-primary)';
            }

            row.innerHTML = `
                <div class="rank-cell">
                    <div class="rank ${user.rank <= 3 ? 'rank-' + user.rank : ''}">${user.rank}</div>
                </div>
                <div class="user-cell">
                    <div class="user-avatar">${user.initials}</div>
                    <div class="user-name">${user.name} ${isCurrentUser ? '(You)' : ''}</div>
                </div>
                <div class="points-cell">${user.points} pts</div>
                <div class="deposits-cell">${user.deposits}</div>
                <div class="streak-cell">${user.streak} days</div>
            `;
            
            leaderboardBody.appendChild(row);
        });
    }

    // Initialize leaderboard
    populateLeaderboard();

    // Leaderboard tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // In a real app, you would fetch different leaderboard data here
                // For demo, we'll just show a notification
                showNotification(`Showing ${this.textContent} leaderboard`);
            });
        });
    }

    // Rewards Modal
    const rewardsModal = document.getElementById('rewardsModal');
    const redeemBtn = document.getElementById('redeemBtn');
    const closeBtn = document.querySelector('.close-btn');
    const redeemRewardBtns = document.querySelectorAll('.redeem-reward-btn');
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.querySelector('.close-success-btn');

    // Open rewards modal
    if (redeemBtn) {
        redeemBtn.addEventListener('click', function() {
            rewardsModal.style.display = 'flex';
        });
    }

    // Close rewards modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            rewardsModal.style.display = 'none';
        });
    }

    // Close success modal
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }

    // Redeem reward buttons
    if (redeemRewardBtns) {
        redeemRewardBtns.forEach(button => {
            button.addEventListener('click', function() {
                const cost = parseInt(this.getAttribute('data-cost'));
                
                if (userData.points >= cost) {
                    // Update points
                    userData.points -= cost;
                    updatePointsDisplay();
                    
                    // Close rewards modal and show success
                    rewardsModal.style.display = 'none';
                    successModal.style.display = 'flex';
                    
                    // Generate random coupon code
                    const couponCode = 'ECO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
                    document.querySelector('.code').textContent = couponCode;
                } else {
                    showNotification('Not enough points to redeem this reward');
                }
            });
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === rewardsModal) {
            rewardsModal.style.display = 'none';
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Update points display
    function updatePointsDisplay() {
        const pointsElements = document.querySelectorAll('.points-value');
        pointsElements.forEach(element => {
            element.textContent = userData.points;
        });
        
        // Update progress bar
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const progressPercentage = (userData.points / userData.nextReward) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
        
        // Update progress text
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = `${userData.points}/${userData.nextReward}`;
        }
        
        // Update points available in rewards modal
        const pointsAvailable = document.querySelector('.points-available span');
        if (pointsAvailable) {
            pointsAvailable.textContent = `${userData.points} points available`;
        }
        
        // Update reward buttons based on available points
        const redeemButtons = document.querySelectorAll('.redeem-reward-btn');
        if (redeemButtons) {
            redeemButtons.forEach(button => {
                const cost = parseInt(button.getAttribute('data-cost'));
                if (userData.points >= cost) {
                    button.disabled = false;
                    button.parentElement.classList.remove('disabled');
                } else {
                    button.disabled = true;
                    button.parentElement.classList.add('disabled');
                }
            });
        }
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ECCA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--bg-secondary);
                border-left: 4px solid var(--accent-primary);
                padding: 1rem;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                animation: slideIn 0.3s ease-out, fadeOut 0.5s ease-out 3s forwards;
                max-width: 350px;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; visibility: hidden; }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        // Remove notification after 3.5 seconds
        setTimeout(() => {
            notification.remove();
        }, 3500);
    }

    // Add demo button for simulation
    const demoButton = document.createElement('button');
    demoButton.textContent = 'Simulate Waste Deposit';
    demoButton.className = 'demo-button';
    demoButton.addEventListener('click', simulateWasteDeposit);
    
    // Add styles for demo button
    const demoStyle = document.createElement('style');
    demoStyle.textContent = `
        .demo-button {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: var(--accent-primary);
            color: var(--bg-primary);
            border: none;
            padding: 0.75rem 1.25rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(78, 204, 163, 0.3);
            transition: all 0.3s;
            z-index: 100;
        }
        
        .demo-button:hover {
            background-color: var(--accent-tertiary);
            transform: translateY(-2px);
        }
    `;
    
    document.head.appendChild(demoStyle);
    document.body.appendChild(demoButton);

    // Simulate new waste deposit
    function simulateWasteDeposit() {
        // Random bin locations
        const binLocations = [
            'Lodhi Gardens Bin #12',
            'Connaught Place Bin #5',
            'India Gate Bin #3',
            'Delhi Public Library Bin #7',
            'Chandni Chowk Bin #9' 
        ];
        
        // Random waste categories
        const wasteCategories = [
            { type: 'recycle', category: 'Recyclable', points: 15 },
            { type: 'trash', category: 'General', points: 10 },
            { type: 'recycle', category: 'Paper', points: 12 },
            { type: 'recycle', category: 'Plastic', points: 15 },
            { type: 'trash', category: 'Organic', points: 8 }
        ];
        
        // Select random bin and category
        const randomBin = binLocations[Math.floor(Math.random() * binLocations.length)];
        const randomWaste = wasteCategories[Math.floor(Math.random() * wasteCategories.length)];
        
        // Create new activity
        const newActivity = {
            type: randomWaste.type,
            location: randomBin,
            time: 'Just now',
            category: randomWaste.category,
            points: randomWaste.points
        };
        
        // Update user data
        userData.activities.unshift(newActivity);
        userData.points += newActivity.points;
        userData.wasteDeposits += 1;
        
        if (randomWaste.type === 'recycle') {
            userData.kgRecycled += Math.floor(Math.random() * 3) + 1;
        }
        
        // Update UI
        updateUI();
        
        // Show notification
        showNotification(`+${newActivity.points} points for depositing waste at ${randomBin}!`);
    }

    // Update UI with current data
    function updateUI() {
        // Update points
        updatePointsDisplay();
        
        // Update stats
        const wasteDepositsEl = document.querySelector('.impact-stats .stat:first-child h2');
        if (wasteDepositsEl) {
            wasteDepositsEl.textContent = userData.wasteDeposits;
        }
        
        const kgRecycledEl = document.querySelector('.impact-stats .stat:last-child h2');
        if (kgRecycledEl) {
            kgRecycledEl.textContent = userData.kgRecycled;
        }
        
        // Update activities (just the first one for demo)
        const firstActivity = document.querySelector('.activity-item:first-child');
        if (firstActivity && userData.activities[0]) {
            const activity = userData.activities[0];
            
            // Update icon
            firstActivity.querySelector('.activity-icon').className = `activity-icon ${activity.type}`;
            
            // Update details
            if (activity.type === 'achievement') {
                firstActivity.querySelector('h3').textContent = activity.title;
            } else {
                firstActivity.querySelector('h3').textContent = `Waste Deposited at ${activity.location}`;
                const tagEl = firstActivity.querySelector('.tag');
                if (tagEl) {
                    tagEl.textContent = activity.category;
                }
            }
            
            const timeEl = firstActivity.querySelector('.time');
            if (timeEl) {
                timeEl.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    ${activity.time}
                `;
            }
            
            const pointsEl = firstActivity.querySelector('.activity-points');
            if (pointsEl) {
                pointsEl.textContent = `+${activity.points}`;
            }
        }
        
        // Update profile stats if on profile page
        const profilePointsEl = document.querySelector('.profile-stat:first-child h2');
        if (profilePointsEl) {
            profilePointsEl.textContent = userData.points;
        }
        
        const profileDepositsEl = document.querySelector('.profile-stat:nth-child(2) h2');
        if (profileDepositsEl) {
            profileDepositsEl.textContent = userData.wasteDeposits;
        }
    }

    // Initialize UI
    updateUI();
});