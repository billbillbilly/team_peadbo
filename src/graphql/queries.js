/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStripeProducts = /* GraphQL */ `
  query GetStripeProducts {
    getStripeProducts {
      id
      title
      subText
      priceMonthly
      priceMonthlyId
      priceYearly
      priceYearlyId
      description
      features
      __typename
    }
  }
`;
export const getRecommendedUsers = /* GraphQL */ `
  query GetRecommendedUsers($userId: ID!) {
    getRecommendedUsers(userId: $userId) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getPeadboUserByEmail = /* GraphQL */ `
  query GetPeadboUserByEmail($email: String!) {
    getPeadboUserByEmail(email: $email) {
      id
      birthdate
      industry
      jobTitle
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      timezone
      image
      firstName
      lastName
      name
      email
      isOnline
      __typename
    }
  }
`;
export const listMyPeadboUsers = /* GraphQL */ `
  query ListMyPeadboUsers($userID: ID!) {
    listMyPeadboUsers(userID: $userID) {
      items {
        id
        industry
        birthdate
        timezone
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        jobTitle
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        __typename
      }
      __typename
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $id: ID
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConversations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        users
        author
        messages {
          nextToken
          __typename
        }
        hiddenBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conversationId
        author
        body
        read
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserEmailList = /* GraphQL */ `
  query GetPeadboUserEmailList($id: ID!) {
    getPeadboUserEmailList(id: $id) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUserEmailLists = /* GraphQL */ `
  query ListPeadboUserEmailLists(
    $filter: ModelPeadboUserEmailListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserEmailLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        users {
          email
          name
          peadboUserID
          __typename
        }
        peadboUserID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNewsletter = /* GraphQL */ `
  query GetPeadboNewsletter($id: ID!) {
    getPeadboNewsletter(id: $id) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboNewsletters = /* GraphQL */ `
  query ListPeadboNewsletters(
    $filter: ModelPeadboNewsletterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboNewsletters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        text
        htmlString
        title
        recipients
        scheduled
        scheduledAt
        subject
        delivered {
          nextToken
          __typename
        }
        opened {
          nextToken
          __typename
        }
        bounces {
          nextToken
          __typename
        }
        clicked {
          nextToken
          __typename
        }
        sgMessageId
        sgBatchId
        status
        version
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboTask = /* GraphQL */ `
  query GetPeadboTask($id: ID!) {
    getPeadboTask(id: $id) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const listPeadboTasks = /* GraphQL */ `
  query ListPeadboTasks(
    $filter: ModelPeadboTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dueDateTime
        title
        description
        author
        assigner {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        assignee {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        priority
        status
        comments {
          nextToken
          __typename
        }
        attachments {
          key
          name
          type
          url
          __typename
        }
        ics
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        peadboTaskAssignerId
        peadboTaskAssigneeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTaskComment = /* GraphQL */ `
  query GetTaskComment($id: ID!) {
    getTaskComment(id: $id) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const listTaskComments = /* GraphQL */ `
  query ListTaskComments(
    $filter: ModelTaskCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        body
        createdAt
        updatedAt
        peadboTaskCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardActivity = /* GraphQL */ `
  query GetPeadboBoardActivity($id: ID!) {
    getPeadboBoardActivity(id: $id) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardActivities = /* GraphQL */ `
  query ListPeadboBoardActivities(
    $filter: ModelPeadboBoardActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        description
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author
        authorName
        title
        shortDescription
        content
        status
        image
        imageS3Key
        externalImageUrl
        tags
        protected
        externalUrl
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardInvite = /* GraphQL */ `
  query GetPeadboBoardInvite($id: ID!) {
    getPeadboBoardInvite(id: $id) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardInvites = /* GraphQL */ `
  query ListPeadboBoardInvites(
    $filter: ModelPeadboBoardInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardInvites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        boardID
        author
        boardOwner {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        userEmail
        userName
        text
        htmlString
        resendCount
        lastResendAt
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardMember = /* GraphQL */ `
  query GetPeadboBoardMember($id: ID!) {
    getPeadboBoardMember(id: $id) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const listPeadboBoardMembers = /* GraphQL */ `
  query ListPeadboBoardMembers(
    $filter: ModelPeadboBoardMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        boardID
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        peadboUserBoardMemberOfId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardDecline = /* GraphQL */ `
  query GetPeadboBoardDecline($id: ID!) {
    getPeadboBoardDecline(id: $id) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardDeclines = /* GraphQL */ `
  query ListPeadboBoardDeclines(
    $filter: ModelPeadboBoardDeclineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardDeclines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        boardID
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        userEmail
        userName
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardUnresponsive = /* GraphQL */ `
  query GetPeadboBoardUnresponsive($id: ID!) {
    getPeadboBoardUnresponsive(id: $id) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardUnresponsives = /* GraphQL */ `
  query ListPeadboBoardUnresponsives(
    $filter: ModelPeadboBoardUnresponsiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardUnresponsives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        boardID
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        userEmail
        userName
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoard = /* GraphQL */ `
  query GetPeadboBoard($id: ID!) {
    getPeadboBoard(id: $id) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoards = /* GraphQL */ `
  query ListPeadboBoards(
    $filter: ModelPeadboBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserContact = /* GraphQL */ `
  query GetPeadboUserContact($id: ID!) {
    getPeadboUserContact(id: $id) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUserContacts = /* GraphQL */ `
  query ListPeadboUserContacts(
    $filter: ModelPeadboUserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserContactList = /* GraphQL */ `
  query GetPeadboUserContactList($id: ID!) {
    getPeadboUserContactList(id: $id) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUserContactLists = /* GraphQL */ `
  query ListPeadboUserContactLists(
    $filter: ModelPeadboUserContactListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserContactLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboEventRating = /* GraphQL */ `
  query GetPeadboEventRating($id: ID!) {
    getPeadboEventRating(id: $id) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const listPeadboEventRatings = /* GraphQL */ `
  query ListPeadboEventRatings(
    $filter: ModelPeadboEventRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboEventRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboEventGuest = /* GraphQL */ `
  query GetPeadboEventGuest($id: ID!) {
    getPeadboEventGuest(id: $id) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const listPeadboEventGuests = /* GraphQL */ `
  query ListPeadboEventGuests(
    $filter: ModelPeadboEventGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboEventGuests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboEventReview = /* GraphQL */ `
  query GetPeadboEventReview($id: ID!) {
    getPeadboEventReview(id: $id) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboEventReviews = /* GraphQL */ `
  query ListPeadboEventReviews(
    $filter: ModelPeadboEventReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboEventReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboEvent = /* GraphQL */ `
  query GetPeadboEvent($id: ID!) {
    getPeadboEvent(id: $id) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const listPeadboEvents = /* GraphQL */ `
  query ListPeadboEvents(
    $filter: ModelPeadboEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardMessage = /* GraphQL */ `
  query GetPeadboBoardMessage($id: ID!) {
    getPeadboBoardMessage(id: $id) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardMessages = /* GraphQL */ `
  query ListPeadboBoardMessages(
    $filter: ModelPeadboBoardMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        content
        readBy
        unreadBy
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNewsletterDelivery = /* GraphQL */ `
  query GetPeadboNewsletterDelivery($sgMessageId: String!) {
    getPeadboNewsletterDelivery(sgMessageId: $sgMessageId) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const listPeadboNewsletterDeliveries = /* GraphQL */ `
  query ListPeadboNewsletterDeliveries(
    $sgMessageId: String
    $filter: ModelPeadboNewsletterDeliveryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPeadboNewsletterDeliveries(
      sgMessageId: $sgMessageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        sgMessageId
        sgEventId
        email
        timestamp
        createdAt
        updatedAt
        peadboNewsletterDeliveredId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNewsletterClick = /* GraphQL */ `
  query GetPeadboNewsletterClick($sgMessageId: String!) {
    getPeadboNewsletterClick(sgMessageId: $sgMessageId) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const listPeadboNewsletterClicks = /* GraphQL */ `
  query ListPeadboNewsletterClicks(
    $sgMessageId: String
    $filter: ModelPeadboNewsletterClickFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPeadboNewsletterClicks(
      sgMessageId: $sgMessageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        sgMessageId
        sgEventId
        email
        timestamp
        url
        createdAt
        updatedAt
        peadboNewsletterClickedId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNewsletterOpen = /* GraphQL */ `
  query GetPeadboNewsletterOpen($sgMessageId: String!) {
    getPeadboNewsletterOpen(sgMessageId: $sgMessageId) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const listPeadboNewsletterOpens = /* GraphQL */ `
  query ListPeadboNewsletterOpens(
    $sgMessageId: String
    $filter: ModelPeadboNewsletterOpenFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPeadboNewsletterOpens(
      sgMessageId: $sgMessageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        sgMessageId
        sgEventId
        email
        timestamp
        createdAt
        updatedAt
        peadboNewsletterOpenedId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNewsletterBounce = /* GraphQL */ `
  query GetPeadboNewsletterBounce($sgMessageId: String!) {
    getPeadboNewsletterBounce(sgMessageId: $sgMessageId) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const listPeadboNewsletterBounces = /* GraphQL */ `
  query ListPeadboNewsletterBounces(
    $sgMessageId: String
    $filter: ModelPeadboNewsletterBounceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPeadboNewsletterBounces(
      sgMessageId: $sgMessageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        sgMessageId
        sgEventId
        email
        timestamp
        reason
        createdAt
        updatedAt
        peadboNewsletterBouncesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNotes = /* GraphQL */ `
  query GetPeadboNotes($id: ID!) {
    getPeadboNotes(id: $id) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const listPeadboNotes = /* GraphQL */ `
  query ListPeadboNotes(
    $filter: ModelPeadboNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboNotification = /* GraphQL */ `
  query GetPeadboNotification($id: ID!) {
    getPeadboNotification(id: $id) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboNotifications = /* GraphQL */ `
  query ListPeadboNotifications(
    $filter: ModelPeadboNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        author
        acknowledged
        title
        message
        resource
        resourceID
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboOrganization = /* GraphQL */ `
  query GetPeadboOrganization($id: ID!) {
    getPeadboOrganization(id: $id) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboOrganizations = /* GraphQL */ `
  query ListPeadboOrganizations(
    $filter: ModelPeadboOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        organizationCode
        name
        description
        logo
        coupons
        path
        licenses
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardPostReadReceipt = /* GraphQL */ `
  query GetPeadboBoardPostReadReceipt($id: ID!) {
    getPeadboBoardPostReadReceipt(id: $id) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardPostReadReceipts = /* GraphQL */ `
  query ListPeadboBoardPostReadReceipts(
    $filter: ModelPeadboBoardPostReadReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardPostReadReceipts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        postID
        post {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboBoardPost = /* GraphQL */ `
  query GetPeadboBoardPost($id: ID!) {
    getPeadboBoardPost(id: $id) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboBoardPosts = /* GraphQL */ `
  query ListPeadboBoardPosts(
    $filter: ModelPeadboBoardPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboBoardPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBoardPostsByDate = /* GraphQL */ `
  query ListBoardPostsByDate(
    $boardID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPeadboBoardPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardPostsByDate(
      boardID: $boardID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserInviteTemplate = /* GraphQL */ `
  query GetPeadboUserInviteTemplate($id: ID!) {
    getPeadboUserInviteTemplate(id: $id) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUserInviteTemplates = /* GraphQL */ `
  query ListPeadboUserInviteTemplates(
    $filter: ModelPeadboUserInviteTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserInviteTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        text
        htmlString
        peadboUserID
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserContentTemplate = /* GraphQL */ `
  query GetPeadboUserContentTemplate($id: ID!) {
    getPeadboUserContentTemplate(id: $id) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUserContentTemplates = /* GraphQL */ `
  query ListPeadboUserContentTemplates(
    $filter: ModelPeadboUserContentTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserContentTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        text
        htmlString
        peadboUserID
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUser = /* GraphQL */ `
  query GetPeadboUser($id: ID!) {
    getPeadboUser(id: $id) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeadboUsers = /* GraphQL */ `
  query ListPeadboUsers(
    $filter: ModelPeadboUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeadboUserContactListAssociation = /* GraphQL */ `
  query GetPeadboUserContactListAssociation($id: ID!) {
    getPeadboUserContactListAssociation(id: $id) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const listPeadboUserContactListAssociations = /* GraphQL */ `
  query ListPeadboUserContactListAssociations(
    $filter: ModelPeadboUserContactListAssociationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeadboUserContactListAssociations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        peadboUserContactID
        peadboUserContactListID
        peadboUserContact {
          id
          title
          firstName
          lastName
          name
          email
          description
          peadboUserID
          author
          createdAt
          updatedAt
          __typename
        }
        peadboUserContactList {
          id
          name
          description
          author
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        author
        __typename
      }
      nextToken
      __typename
    }
  }
`;
